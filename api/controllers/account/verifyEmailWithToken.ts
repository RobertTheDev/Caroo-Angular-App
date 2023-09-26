import { Request, Response } from 'express';
import { ReasonPhrases, StatusCodes } from 'http-status-codes';
import winstonLogger from 'api/utils/winstonLogger';
import AccountPrismaService from 'api/providers/prisma/account.service';
import isDateExpired from 'api/lib/isDateExpired';
import UserPrismaService from 'api/providers/prisma/user.service';
import { format } from 'date-fns';

// This controller verifies a user's email with email verification token.
// Validation of the token takes place is the isEmailVerificationTokenExpired middleware.
export default async function verifyEmailWithToken(
  req: Request,
  res: Response,
) {
  try {
    // Get the request body.
    const { params } = req;

    // Get the request body.
    const { user } = req.session;

    if (!user) {
      return res.status(StatusCodes.NOT_FOUND).send({
        statusCode: StatusCodes.NOT_FOUND,
        statusMessage: 'No user was found in the session.',
      });
    }

    // Get the email verification token from the request params.
    const { emailVerificationToken } = params;

    // Declare and use user service to get access to user handlers.
    const accountPrismaService = new AccountPrismaService();

    if (!emailVerificationToken) {
      // Return the updated user.
      return res.status(StatusCodes.BAD_REQUEST).send({
        statusCode: StatusCodes.BAD_REQUEST,
        statusMessage: `No email verification token was provided.`,
      });
    }

    const userPrismaService = new UserPrismaService();

    const findUser = await userPrismaService.findOneById(user.id);

    // Throw error if token has no expiry.
    if (!findUser) {
      return res.status(StatusCodes.NOT_FOUND).send({
        statusCode: StatusCodes.NOT_FOUND,
        statusMessage: `The email verification token has no expiry.`,
      });
    }

    // Throw error if token has no expiry.
    if (!findUser.emailVerificationTokenExpiry) {
      return res.status(StatusCodes.NOT_FOUND).send({
        statusCode: StatusCodes.NOT_FOUND,
        statusMessage: `The email verification token has no expiry.`,
      });
    }

    // Throw error if token has expired.
    if (isDateExpired(findUser.emailVerificationTokenExpiry)) {
      return res.status(StatusCodes.BAD_REQUEST).send({
        statusCode: StatusCodes.BAD_REQUEST,
        statusMessage: `Your email verification token expires 10 minutes after your last request. Please wait until ${format(
          findUser.emailVerificationTokenExpiry,
          'HH:mm',
        )} to request a new one.`,
      });
    }

    // Update user password using the email verification token.
    const updatedUser =
      await accountPrismaService.verifyEmailAddressWithEmailVerificationToken(
        emailVerificationToken,
      );

    // Return the updated user.
    return res.status(StatusCodes.OK).send({
      statusCode: StatusCodes.OK,
      statusMessage: `Successfully verified user with email address ${updatedUser.emailAddress}.`,
      data: updatedUser,
    });
  } catch (error) {
    // Log the error.
    winstonLogger.error(
      `Error verifying user email address with token:`,
      error,
    );

    // If an error occurs - catch and send the error.
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).send({
      statusCode: StatusCodes.INTERNAL_SERVER_ERROR,
      statusMessage: ReasonPhrases.INTERNAL_SERVER_ERROR,
    });
  }
}
