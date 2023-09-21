import { Request, Response } from 'express';
import { ReasonPhrases, StatusCodes } from 'http-status-codes';
import winstonLogger from 'api/utils/winstonLogger';
import SettingsPrismaService from 'api/providers/prisma/settings.service';
import verifyEmailWithTokenSchema from 'models/settings/validators/verifyEmailWithToken.schema';

export default async function verifyEmailWithToken(
  req: Request,
  res: Response,
) {
  try {
    // Get the request body.
    const { params } = req;

    const { verifyEmailToken } = params;

    const validation = await verifyEmailWithTokenSchema.safeParseAsync(
      verifyEmailToken,
    );

    // If validation is unsuccessful send an error response with validation error.
    if (!validation.success) {
      return res.status(StatusCodes.BAD_REQUEST).send({
        message: validation.error.issues[0].message,
      });
    }

    const { data } = validation;

    const settingsPrismaService = new SettingsPrismaService();

    // Create new user.
    const updatedUser = await settingsPrismaService.verifyEmailWithToken(
      data.verifyEmailToken,
    );

    return res.status(StatusCodes.OK).send({
      message: `Successfully updated user reset password token with email address.`,
      data: updatedUser,
    });
  } catch (error) {
    // Log the error.
    winstonLogger.error(`Error during user sign up:`, error);
    // If an error occurs - catch and send the error.
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).send({
      statusCode: StatusCodes.INTERNAL_SERVER_ERROR,
      statusMessage: ReasonPhrases.INTERNAL_SERVER_ERROR,
    });
  }
}
