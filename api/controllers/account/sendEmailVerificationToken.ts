import { Request, Response } from 'express';
import { ReasonPhrases, StatusCodes } from 'http-status-codes';
import winstonLogger from 'api/utils/winstonLogger';
import AccountPrismaService from 'api/providers/prisma/account.service';
import sendEmailVerificationTokenSchema from 'models/account/validators/sendEmailVerificationToken.schema';
import UserPrismaService from 'api/providers/prisma/user.service';
import isDateUnexpired from 'api/lib/isDateUnexpired';
import { format } from 'date-fns';

// This controller sends email verification token and inserts the token into the user table.

export default async function sendEmailVerificationToken(
  req: Request,
  res: Response,
) {
  try {
    // Get the user from the session.
    const { user } = req.session;

    const accountPrismaService = new AccountPrismaService();

    if (!user) {
      return res.status(StatusCodes.NOT_FOUND).send({
        statusCode: StatusCodes.NOT_FOUND,
        statusMessage: 'No user was found in the session.',
      });
    }

    const { id, emailAddress } = user;

    // Validate the body with send email verification token schema.
    const validation = await sendEmailVerificationTokenSchema.safeParseAsync({
      emailAddress,
    });

    // If validation is unsuccessful send an error response with validation error.
    if (!validation.success) {
      return res.status(StatusCodes.BAD_REQUEST).send({
        statusCode: StatusCodes.BAD_REQUEST,
        statusMessage: validation.error.issues[0].message,
      });
    }

    // Get data from validation.
    const { data } = validation;

    const userPrismaService = new UserPrismaService();

    const findUser = await userPrismaService.findOneById(id);

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

    // Throw error if token has no expiry.
    if (findUser.emailVerified) {
      return res.status(StatusCodes.BAD_REQUEST).send({
        statusCode: StatusCodes.BAD_REQUEST,
        statusMessage: `Your email was verified on ${format(
          findUser.emailVerified,
          'HH:mm, dd MMMM yyyy',
        )}.`,
      });
    }

    // Throw error if token has expired.
    if (isDateUnexpired(findUser.emailVerificationTokenExpiry)) {
      return res.status(StatusCodes.BAD_REQUEST).send({
        statusCode: StatusCodes.BAD_REQUEST,
        statusMessage: `Your email verification token expires 10 minutes after your last request. Please wait until ${format(
          findUser.emailVerificationTokenExpiry,
          'HH:mm',
        )} to request a new one.`,
      });
    }

    // Update user with email verification token.
    const updatedUser =
      await accountPrismaService.updateOneWithEmailVerificationToken(id, data);

    // Return the updated user.
    return res.status(StatusCodes.OK).send({
      statusCode: StatusCodes.OK,
      statusMessage: `Successfully updated user email verification token with email address ${updatedUser.emailAddress}.`,
      data: updatedUser,
    });
  } catch (error) {
    // Log the error.
    winstonLogger.error(`Error sending email verification token:`, error);

    // If an error occurs - catch and send the error.
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).send({
      statusCode: StatusCodes.INTERNAL_SERVER_ERROR,
      statusMessage: ReasonPhrases.INTERNAL_SERVER_ERROR,
    });
  }
}
