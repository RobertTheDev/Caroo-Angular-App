import isDateExpired from 'api/lib/isDateExpired';
import UserPrismaService from 'api/providers/prisma/user.service';
import winstonLogger from 'api/utils/winstonLogger';
import { Request, Response, NextFunction } from 'express';
import { ReasonPhrases, StatusCodes } from 'http-status-codes';

// This middleware checks if the user's password reset token has expired.

export default async function isPasswordResetTokenExpired(
  req: Request,
  res: Response,
  next: NextFunction,
) {
  try {
    // Get reset password token from the params.
    const { resetPasswordToken } = req.params;

    // Use User Prisma Service to get the user handlers.
    const userPrismaService = new UserPrismaService();

    // Throw error if no token was provided.
    if (!resetPasswordToken) {
      return res.status(StatusCodes.BAD_REQUEST).send({
        statusCode: StatusCodes.BAD_REQUEST,
        statusMessage: `No reset password token was provided.`,
      });
    }

    const findUser = await userPrismaService.findUserByResetPasswordToken(
      resetPasswordToken,
    );

    // Throw not found error if no user with token was found.
    if (!findUser) {
      return res.status(StatusCodes.NOT_FOUND).send({
        statusCode: StatusCodes.NOT_FOUND,
        statusMessage: `No user with reset password token ${resetPasswordToken} was found.`,
      });
    }

    // Throw error if token has no expiry.
    if (!findUser.passwordResetTokenExpiry) {
      return res.status(StatusCodes.NOT_FOUND).send({
        statusCode: StatusCodes.NOT_FOUND,
        statusMessage: `The password reset token has no expiry.`,
      });
    }

    // Throw error if token has expired.
    if (isDateExpired(findUser.passwordResetTokenExpiry)) {
      return res.status(StatusCodes.BAD_REQUEST).send({
        statusCode: StatusCodes.BAD_REQUEST,
        statusMessage: `Your password reset token has expired. Please request for a new password recovery email to get a new one.`,
      });
    }

    // Continue if password reset token meets the criteria.
    return next();
  } catch (error) {
    // Log the error.
    winstonLogger.error(
      `Error checking if password reset token has expired:`,
      error,
    );

    // Catch and return an error if found.
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).send({
      statusCode: StatusCodes.INTERNAL_SERVER_ERROR,
      statusMessage: ReasonPhrases.INTERNAL_SERVER_ERROR,
    });
  }
}
