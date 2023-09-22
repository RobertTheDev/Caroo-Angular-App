import { Request, Response } from 'express';
import { ReasonPhrases, StatusCodes } from 'http-status-codes';
import winstonLogger from 'api/utils/winstonLogger';
import AccountPrismaService from 'api/providers/prisma/account.service';

// This controller verifies a user's email with email verification token.
// Validation of the token takes place is the isEmailVerificationTokenExpired middleware.
export default async function verifyEmailWithToken(
  req: Request,
  res: Response,
) {
  try {
    // Get the request body.
    const { params } = req;

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
