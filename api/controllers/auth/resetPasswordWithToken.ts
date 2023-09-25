import { Request, Response } from 'express';
import { ReasonPhrases, StatusCodes } from 'http-status-codes';
import winstonLogger from 'api/utils/winstonLogger';
import resetPasswordWithTokenSchema from 'models/auth/validators/resetPasswordWithToken.schema';
import { hashPassword } from 'api/lib/passwordManagement';
import AuthPrismaService from 'api/providers/prisma/auth.service';

// This controller resets password with password reset token.

export default async function resetPasswordWithToken(
  req: Request,
  res: Response,
) {
  try {
    // Get the request body.
    const { body, params } = req;

    // Get the reset password token from the request params.
    const { resetPasswordToken } = params;

    // Declare and use user service to get access to user handlers.
    const authPrismaService = new AuthPrismaService();

    // Declare and use user service to get access to user handlers.
    const validation = await resetPasswordWithTokenSchema.safeParseAsync(body);

    // If validation is unsuccessful send an error response with validation error.
    if (!validation.success) {
      return res.status(StatusCodes.BAD_REQUEST).send({
        statusCode: StatusCodes.BAD_REQUEST,
        statusMessage: validation.error.issues[0].message,
      });
    }

    // Get data from the validation.
    const { data } = validation;

    // Hash the password.
    const hashedPassword = await hashPassword(data.password);

    // Update user password using the reset password token.
    const updatedUser = await authPrismaService.resetPasswordWithToken(
      resetPasswordToken,
      { password: hashedPassword },
    );

    // Return the updated user.
    return res.status(StatusCodes.OK).send({
      statusCode: StatusCodes.OK,
      statusMessage: `Successfully updated user reset password token with email address ${updatedUser.emailAddress}.`,
      data: updatedUser,
    });
  } catch (error) {
    // Log the error.
    winstonLogger.error(`Error resetting password with token:`, error);

    // If an error occurs - catch and send the error.
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).send({
      statusCode: StatusCodes.INTERNAL_SERVER_ERROR,
      statusMessage: ReasonPhrases.INTERNAL_SERVER_ERROR,
    });
  }
}
