import { verifyPassword } from 'api/lib/passwordManagement';
import { updateAccountEmailAddress } from 'api/providers/prisma/account.service';
import {
  findUserByEmailAddress,
  findUserById,
} from 'api/providers/prisma/user.service';
import winstonLogger from 'api/utils/winstonLogger';
import { Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import changeEmailSchema from 'models/account/validators/updateEmail.schema';

// This controller handles the user changing their email address.
// To do this we need to find the user's data and then check password entered is correct.
// We also need to validate user's request body to ensure correct data is entered.

export default async function changeEmailAddress(req: Request, res: Response) {
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

    // STEP 2: Get the user's data.
    // Find user using the id received from session.
    const findUser = await findUserById(id);
    // If no user is found we return a 404 error.
    if (!findUser) {
      return res.status(StatusCodes.NOT_FOUND).send({
        statusCode: StatusCodes.NOT_FOUND,
        statusMessage: `User with id ${id} was not found.`,
      });
    }

    // STEP 3: Validate the request body.
    // Get the request body.
    const { body } = req;
    // Validate the request body.
    const validation = await changeEmailSchema.safeParseAsync(body);
    // If validation is unsuccessful then return a valdation error message.
    if (!validation.success) {
      return res.status(StatusCodes.BAD_REQUEST).send({
        statusCode: StatusCodes.BAD_REQUEST,
        statusMessage: validation.error.errors[0].message,
      });
    }

    // STEP 4: Check if email address is in use.
    // Email address from validated request body.
    const { emailAddress } = validation.data;
    // Check email is available by checking a user does not exist in database.
    const isEmailInUse = await findUserByEmailAddress(emailAddress);
    if (isEmailInUse) {
      return res.status(StatusCodes.BAD_REQUEST).send({
        statusCode: StatusCodes.BAD_REQUEST,
        statusMessage: `The email ${emailAddress} is already in use.`,
        data: null,
      });
    }

    // STEP 5: Check entered password is correct.
    // Check the password is correct to proceed.
    const isPasswordCorrect = await verifyPassword(
      validation.data.password,
      findUser.password,
    );
    // If password is incorrect then return an error.
    if (!isPasswordCorrect) {
      return res.status(StatusCodes.BAD_REQUEST).send({
        statusCode: StatusCodes.BAD_REQUEST,
        statusMessage: 'Password entered is incorrect.',
      });
    }

    // STEP 6: Update email address and return the data.
    // Update the user's email address.
    const data = await updateAccountEmailAddress(id, validation.data);
    // Return the updated user.
    return res.status(StatusCodes.OK).send({
      statusCode: StatusCodes.OK,
      statusMessage: `Succesfully updated user email to ${validation.data.emailAddress}`,
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
