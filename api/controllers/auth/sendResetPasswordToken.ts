import { Request, Response } from 'express';
import { ReasonPhrases, StatusCodes } from 'http-status-codes';
import winstonLogger from 'api/utils/winstonLogger';
import sendPasswordResetTokenSchema from 'models/auth/validators/sendPasswordResetToken.schema';
import UserPrismaService from 'api/providers/prisma/user.service';

// This controller sends reset password token.

export default async function sendResetPasswordToken(
  req: Request,
  res: Response,
) {
  try {
    // Get the request body.
    const { body } = req;

    // Declare and use user service to get access to user handlers.
    const userPrismaService = new UserPrismaService();

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

    // Update user with reset password token.
    const updatedUser = await userPrismaService.updateOneWithResetPasswordToken(
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
