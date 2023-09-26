import { hashPassword, verifyPassword } from 'api/lib/passwordManagement';
import { updateAccountPassword } from 'api/providers/prisma/account.service';
import { findUserById } from 'api/providers/prisma/user.service';
import winstonLogger from 'api/utils/winstonLogger';
import { Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import changePasswordSchema from 'models/account/validators/updatePassword.schema';

// This controller handles the user changing their password.
// To do this we need to find the user's data and then check current password entered is correct.
// We also need to validate user's request body to ensure correct data is entered.

export default async function changePassword(req: Request, res: Response) {
  try {
    // STEP 1: Get the user id from session.
    // Get the user from the session.
    const { user } = req.session;
    // If no user is found return a not found error.
    if (!user) {
      return res.status(StatusCodes.UNAUTHORIZED).send({
        statusCode: StatusCodes.UNAUTHORIZED,
        statusMessage: 'You are not authorised to perform this action.',
      });
    }
    // Get the user's id.
    const { id } = user;

    // STEP 2: Validate the request body.
    // Get the request body.
    const { body } = req;
    // Validate the request body.
    const validation = await changePasswordSchema.safeParseAsync(body);
    // If validation is unsuccessful then return a valdation error message.
    if (!validation.success) {
      return res.status(StatusCodes.BAD_REQUEST).send({
        statusCode: StatusCodes.BAD_REQUEST,
        statusMessage: validation.error.errors[0].message,
      });
    }

    // STEP 3: Get the user's data.
    // Find user using the is received from session.
    const findUser = await findUserById(id);
    // If no user is found we return a 404 error.
    if (!findUser) {
      return res.status(StatusCodes.NOT_FOUND).send({
        statusCode: StatusCodes.NOT_FOUND,
        statusMessage: `User with id ${id} was not found.`,
      });
    }

    // STEP 4: Check entered password is correct.
    // Check the password is correct to proceed.
    const isPasswordCorrect = await verifyPassword(
      validation.data.currentPassword,
      findUser.password,
    );
    // If password is incorrect then return an error.
    if (!isPasswordCorrect) {
      return res.status(StatusCodes.BAD_REQUEST).send({
        statusCode: StatusCodes.BAD_REQUEST,
        statusMessage: 'Password entered is incorrect.',
      });
    }

    // STEP 5: Update password and return the data.
    // Hash the user's new password.
    const hashedPassword = await hashPassword(validation.data.newPassword);
    // Update the user with the hashed password.
    const data = await updateAccountPassword(id, hashedPassword);
    // Return the updated user.
    return res.status(StatusCodes.OK).send({
      statusCode: StatusCodes.OK,
      statusMessage: `Succesfully updated user password.`,
      data,
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
