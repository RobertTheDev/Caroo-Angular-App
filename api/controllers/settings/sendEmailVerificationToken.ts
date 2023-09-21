import { Request, Response } from 'express';
import { ReasonPhrases, StatusCodes } from 'http-status-codes';
import winstonLogger from 'api/utils/winstonLogger';
import SettingsPrismaService from 'api/providers/prisma/settings.service';
import sendEmailVerificationTokenSchema from 'models/settings/validators/sendEmailVerificationToken.schema';

export default async function sendEmailVerificationToken(
  req: Request,
  res: Response,
) {
  try {
    // Get the request body.
    const { body, params } = req;

    const { emailAddress } = params;

    const settingsPrismaService = new SettingsPrismaService();

    const validation = await sendEmailVerificationTokenSchema.safeParseAsync(
      body,
    );

    // If validation is unsuccessful send an error response with validation error.
    if (!validation.success) {
      return res.status(StatusCodes.BAD_REQUEST).send({
        message: validation.error.issues[0].message,
      });
    }

    const { data } = validation;

    // Create new user.
    const updatedUser =
      await settingsPrismaService.updateEmailVerificationTokenWithEmailAddress(
        data,
        emailAddress,
      );

    return res.status(StatusCodes.OK).send({
      message: `Successfully updated user reset password token with email address ${updatedUser.emailAddress}.`,
      data: updatedUser,
    });
  } catch (error) {
    // Log the error.
    winstonLogger.error(`Error sending email verification token:`, error);

    // Catch and return an error if found.
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).send({
      statusCode: StatusCodes.INTERNAL_SERVER_ERROR,
      statusMessage: ReasonPhrases.INTERNAL_SERVER_ERROR,
    });
  }
}
