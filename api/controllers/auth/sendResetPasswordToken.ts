import { Request, Response } from 'express';
import { ReasonPhrases, StatusCodes } from 'http-status-codes';
import winstonLogger from 'api/utils/winstonLogger';
import sendPasswordResetTokenSchema from 'models/auth/validators/sendPasswordResetToken.schema';
import UserPrismaService from 'api/providers/prisma/user.service';

export default async function sendRestPasswordToken(
  req: Request,
  res: Response,
) {
  try {
    // Get the request body.
    const { body } = req;

    const userPrismaService = new UserPrismaService();

    const validation = await sendPasswordResetTokenSchema.safeParseAsync(body);

    // If validation is unsuccessful send an error response with validation error.
    if (!validation.success) {
      return res.status(StatusCodes.BAD_REQUEST).send({
        message: validation.error.issues[0].message,
      });
    }

    const { data } = validation;

    // Create new user.
    const updatedUser = await userPrismaService.updateOneWithResetPasswordToken(
      data,
    );

    return res.status(StatusCodes.OK).send({
      message: `Successfully updated user reset password token with email address ${updatedUser.emailAddress}.`,
      data: updatedUser,
    });
  } catch (error) {
    // Log the error.
    winstonLogger.error(`Error during user sign up:`, error);
    // If an error occurs - catch and send the error.
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).send({
      message: ReasonPhrases.INTERNAL_SERVER_ERROR,
    });
  }
}
