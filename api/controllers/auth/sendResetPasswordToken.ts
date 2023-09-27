import { Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import winstonLogger from 'api/utils/winstonLogger';
import sendPasswordResetTokenSchema from 'models/auth/validators/sendPasswordResetToken.schema';
import isDateUnexpired from 'api/lib/isDateUnexpired';
import { format } from 'date-fns';
import { findUserByEmailAddress } from 'api/providers/prisma/user.service';
import { authSendPasswordResetByEmailAddress } from 'api/providers/prisma/auth.service';

// This controller sends reset password token.
// We do this using send grid to send a token and update the user in db with the token to be found.

export default async function sendResetPasswordToken(
  req: Request,
  res: Response,
) {
  try {
    // STEP 3: Validate the request body.
    // Get the request body.
    const { body } = req;
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

    // STEP 1 :Find the user by their email address.
    const findUser = await findUserByEmailAddress(data.emailAddress);
    // Throw error if token has no expiry.
    if (!findUser) {
      return res.status(StatusCodes.NOT_FOUND).send({
        statusCode: StatusCodes.NOT_FOUND,
        statusMessage: `No user was found with that email address.`,
      });
    }

    // STEP 4: Check password token has neither expired nor unexpired.
    // Return an error if token has no expiry.
    // Return an error if token has not expired.
    if (
      findUser.passwordResetTokenExpiry &&
      isDateUnexpired(findUser.passwordResetTokenExpiry)
    ) {
      return res.status(StatusCodes.BAD_REQUEST).send({
        statusCode: StatusCodes.BAD_REQUEST,
        statusMessage: `Your password reset token expires 10 minutes after your last request. Please wait until ${format(
          findUser.passwordResetTokenExpiry,
          'HH:mm',
        )} to request a new one.`,
      });
    }

    // STEP 5: Update and return the user.
    // Update user with reset password token.
    const updatedUser = await authSendPasswordResetByEmailAddress(
      data.emailAddress,
      data,
    );
    // Return the updated user.
    return res.status(StatusCodes.OK).send({
      statusCode: StatusCodes.OK,
      statusMessage: `Successfully updated user reset password token with email address ${updatedUser.emailAddress}.`,
      data: updatedUser,
    });
  } catch (error: unknown) {
    // Catch and log any errors. If the error is of intance type Error we can add the error message.
    if (error instanceof Error) {
      // Log the error.
      winstonLogger.error(
        `Error in route ${req.method} ${req.originalUrl}: ${error.message}`,
      );
      // If an error occurs - catch and send the error.
      return res.status(StatusCodes.INTERNAL_SERVER_ERROR).send({
        statusCode: StatusCodes.INTERNAL_SERVER_ERROR,
        statusMessage: `An error occurred: ${error.message}`,
      });
    } else {
      // Log the error.
      winstonLogger.error(
        `Error in route ${req.method} ${req.originalUrl}: ${error}`,
      );
      // If an error occurs - catch and send the error.
      return res.status(StatusCodes.INTERNAL_SERVER_ERROR).send({
        statusCode: StatusCodes.INTERNAL_SERVER_ERROR,
        statusMessage: `An error occurred: ${error}`,
      });
    }
  }
}
