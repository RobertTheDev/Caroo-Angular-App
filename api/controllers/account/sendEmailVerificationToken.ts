import { Request, Response } from 'express';
import { ReasonPhrases, StatusCodes } from 'http-status-codes';
import winstonLogger from 'api/utils/winstonLogger';

import AccountPrismaService from 'api/providers/prisma/account.service';
import sendEmailVerificationTokenSchema from 'models/account/validators/sendEmailVerificationToken.schema';

// This controller sends email verification token and inserts the token into the user table.

export default async function sendEmailVerificationToken(
  req: Request,
  res: Response,
) {
  try {
    // Get the request body.
    const { body } = req;

    // Declare and use user service to get access to user handlers.
    const accountPrismaService = new AccountPrismaService();

    // Validate the body with send email verification token schema.
    const validation = await sendEmailVerificationTokenSchema.safeParseAsync(
      body,
    );

    // If validation is unsuccessful send an error response with validation error.
    if (!validation.success) {
      return res.status(StatusCodes.BAD_REQUEST).send({
        statusCode: StatusCodes.BAD_REQUEST,
        statusMessage: validation.error.issues[0].message,
      });
    }

    // Get data from validation.
    const { data } = validation;

    // Update user with email verification token.
    const updatedUser =
      await accountPrismaService.updateOneWithEmailVerificationToken(data);

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
