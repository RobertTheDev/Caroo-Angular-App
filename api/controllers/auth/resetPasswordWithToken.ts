import { Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import winstonLogger from 'api/utils/winstonLogger';
import resetPasswordWithTokenSchema from 'models/auth/validators/resetPasswordWithToken.schema';
import { hashPassword } from 'api/lib/passwordManagement';
import { authResetPasswordWithToken } from 'api/providers/prisma/auth.service';
import { findUserByResetPasswordToken } from 'api/providers/prisma/user.service';

// This controller resets password with password reset token.

export default async function resetPasswordWithToken(
  req: Request,
  res: Response,
) {
  try {
    //  STEP 1: Get the reset password token from the request params.
    const { resetPasswordToken } = req.params;
    // If token does not exist return an error.
    if (!resetPasswordToken) {
      return res.status(StatusCodes.BAD_REQUEST).send({
        statusCode: StatusCodes.BAD_REQUEST,
        statusMessage: 'No reset password token was provided.',
      });
    }

    //  STEP 2: Find user with the reset token.
    const findUser = await findUserByResetPasswordToken(resetPasswordToken);
    // If user does not exist return an error.
    if (!findUser) {
      return res.status(StatusCodes.BAD_REQUEST).send({
        statusCode: StatusCodes.BAD_REQUEST,
        statusMessage: 'No user with that password reset token was found.',
      });
    }

    // STEP 3: Validate the request body.
    // Get the request body.
    const { body } = req;
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

    // STEP 4: Hash the password from validated body.
    // Hash the password.
    const hashedPassword = await hashPassword(data.password);

    // STEP 5: Update and return user with the hashed password and reset password token.
    // Update user password using the reset password token.
    const updatedUser = await authResetPasswordWithToken(resetPasswordToken, {
      password: hashedPassword,
    });
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
