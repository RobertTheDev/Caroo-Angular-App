import { Request, Response } from 'express';
import { ReasonPhrases, StatusCodes } from 'http-status-codes';
import winstonLogger from 'api/utils/winstonLogger';
import sendPasswordResetTokenSchema from 'models/auth/validators/sendPasswordResetToken.schema';
import AuthPrismaService from 'api/providers/prisma/auth.service';
import UserPrismaService from 'api/providers/prisma/user.service';
import isDateUnexpired from 'api/lib/isDateUnexpired';
import { format } from 'date-fns';

// This controller sends reset password token.

export default async function sendResetPasswordToken(
  req: Request,
  res: Response,
) {
  try {
    // Get the request body.
    const { body } = req;

    const { user } = req.session;

    if (!user) {
      return res.status(StatusCodes.NOT_FOUND).send({
        statusCode: StatusCodes.NOT_FOUND,
        statusMessage: 'No user was found in the session.',
      });
    }

    // Declare and use user service to get access to user handlers.
    const authPrismaService = new AuthPrismaService();

    // Validate the body with send password reset token schema.
    const validation = await sendPasswordResetTokenSchema.safeParseAsync(body);

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

    const findUser = await userPrismaService.findOneById(user.id);

    // Throw error if token has no expiry.
    if (!findUser) {
      return res.status(StatusCodes.NOT_FOUND).send({
        statusCode: StatusCodes.NOT_FOUND,
        statusMessage: `The email verification token has no expiry.`,
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
    if (isDateUnexpired(findUser.passwordResetTokenExpiry)) {
      return res.status(StatusCodes.BAD_REQUEST).send({
        statusCode: StatusCodes.BAD_REQUEST,
        statusMessage: `Your password reset token expires 10 minutes after your last request. Please wait until ${format(
          findUser.passwordResetTokenExpiry,
          'HH:mm',
        )} to request a new one.`,
      });
    }

    // Update user with reset password token.
    const updatedUser = await authPrismaService.sendPasswordResetByEmailAddress(
      data.emailAddress,
      data,
    );

    // Return the updated user.
    return res.status(StatusCodes.OK).send({
      statusCode: StatusCodes.OK,
      statusMessage: `Successfully updated user reset password token with email address ${updatedUser.emailAddress}.`,
      data: updatedUser,
    });
  } catch (error) {
    // Log the error.
    winstonLogger.error(`Error sending reset password token:`, error);

    // If an error occurs - catch and send the error.
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).send({
      statusCode: StatusCodes.INTERNAL_SERVER_ERROR,
      statusMessage: ReasonPhrases.INTERNAL_SERVER_ERROR,
    });
  }
}
