import { Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import loginSchema from 'models/auth/validators/login.schema';
import winstonLogger from 'api/utils/winstonLogger';
import { authLogin } from 'api/providers/prisma/auth.service';
import { verifyPassword } from 'api/lib/passwordManagement';
import { findUserByEmailAddress } from 'api/providers/prisma/user.service';

// This controller handles user login.
// To do this we validate the request body and then find a user with the email address.
// If the password is correct we save user into session and return the user.

export default async function login(req: Request, res: Response) {
  try {
    // STEP 1: Validate the request body.
    // Get the request body.
    const { body } = req;
    // Validate the body using login schema.
    const validation = await loginSchema.safeParseAsync(body);
    // If validation fails then return a bad request error.
    if (!validation.success) {
      return res.status(StatusCodes.BAD_REQUEST).send({
        statusCode: StatusCodes.BAD_REQUEST,
        statusMessage: validation.error.errors[0].message,
      });
    }
    // Get email and password from validated body.
    const { emailAddress, password } = validation.data;

    // STEP 2: Get the user's data.
    // Find user using the email address received from the validation body.
    const findUser = await findUserByEmailAddress(emailAddress);
    // If no user is found we return a 404 error.
    if (!findUser) {
      return res.status(StatusCodes.NOT_FOUND).send({
        statusCode: StatusCodes.NOT_FOUND,
        statusMessage: `User with email address ${emailAddress} was not found.`,
      });
    }

    // STEP 3: Check entered password is correct.
    // Check the password is correct to proceed.
    const isPasswordCorrect = await verifyPassword(password, findUser.password);
    // If password is incorrect then return an error.
    if (!isPasswordCorrect) {
      return res.status(StatusCodes.BAD_REQUEST).send({
        statusCode: StatusCodes.BAD_REQUEST,
        statusMessage: 'Password entered is incorrect.',
      });
    }

    // STEP 4: Get the user from db using body's email address.
    // Use email address from validation body.
    // Get user by email address.
    const user = await authLogin(emailAddress);
    // If user not found return a not found error.
    if (!user) {
      return res.status(StatusCodes.NOT_FOUND).send({
        statusCode: StatusCodes.NOT_FOUND,
        statusMessage: `User with email ${body.email} could not be found.`,
      });
    }

    // STEP 5: Save user into session.
    // Save user into session.
    req.session.user = user;

    // STEP 6: Return the user.
    // Return the logged in user.
    return res.status(StatusCodes.OK).send({
      statusCode: StatusCodes.OK,
      statusMessage: `Successfully logged in.`,
      data: user,
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
