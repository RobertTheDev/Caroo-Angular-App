import isDateExpired from 'api/lib/isDateExpired';
import AccountPrismaService from 'api/providers/prisma/account.service';
import winstonLogger from 'api/utils/winstonLogger';
import { Request, Response, NextFunction } from 'express';
import { ReasonPhrases, StatusCodes } from 'http-status-codes';

// This middleware checks if the user's email verification token has not expired.

export default async function isEmailVerificationTokenUnexpired(
  req: Request,
  res: Response,
  next: NextFunction,
) {
  try {
    // Get reset password token from the params.
    const { emailVerificationToken } = req.params;

    // Use User Prisma Service to get the user handlers.
    const accountPrismaService = new AccountPrismaService();

    // Throw error if no token was provided.
    if (!emailVerificationToken) {
      return res.status(StatusCodes.BAD_REQUEST).send({
        statusCode: StatusCodes.BAD_REQUEST,
        statusMessage: `No email verification token was provided.`,
      });
    }

    const findUser =
      await accountPrismaService.findUserByEmailVerificationToken(
        emailVerificationToken,
      );

    // Throw not found error if no user with token was found.
    if (!findUser) {
      return res.status(StatusCodes.NOT_FOUND).send({
        statusCode: StatusCodes.NOT_FOUND,
        statusMessage: `No user with email verification token ${emailVerificationToken} was found.`,
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
        statusMessage: `Your email verification token has expired. Please request for a new email verification email to get a new one.`,
      });
    }

    // Continue if email verification token meets the criteria.
    return next();
  } catch (error) {
    // Log the error.
    winstonLogger.error(
      `Error checking if email verification token has expired:`,
      error,
    );

    // Catch and return an error if found.
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).send({
      statusCode: StatusCodes.INTERNAL_SERVER_ERROR,
      statusMessage: ReasonPhrases.INTERNAL_SERVER_ERROR,
    });
  }
}
