import signUpSchema from '../../../models/auth/validators/signUp.schema';
import { Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import winstonLogger from 'api/utils/winstonLogger';
import { hashPassword } from 'api/lib/passwordManagement';
import { authSignUp } from 'api/providers/prisma/auth.service';
import { findUserByEmailAddress } from 'api/providers/prisma/user.service';

// This controller signs up a user and signs them into session.
// To do this we check is email is use and then create a user in db.
// Then we save them into an express session.

export default async function signUp(req: Request, res: Response) {
  try {
    // STEP 1: Validate the body.
    // Get the request body.
    const { body } = req;
    // Validate the body.
    const validation = await signUpSchema.safeParseAsync(body);
    // If validation is unsuccessful send an error response with validation error.
    if (!validation.success) {
      return res.status(StatusCodes.BAD_REQUEST).send({
        statusCode: StatusCodes.BAD_REQUEST,
        statusMessage: validation.error.issues[0].message,
      });
    }

    // STEP 2: Check if email is in use.
    // Email address from validated request body.
    const { emailAddress } = validation.data;
    // Check email is available by checking a user does not exist in database.
    const checkEmailIsAvailable = await findUserByEmailAddress(emailAddress);
    if (!checkEmailIsAvailable) {
      return res.status(StatusCodes.BAD_REQUEST).send({
        statusCode: StatusCodes.BAD_REQUEST,
        statusMessage: `The email ${emailAddress} is already in use.`,
        data: null,
      });
    }

    // STEP 3: Hash the password from the request body.
    // Seperate the password from the validation data.
    const { password, ...userWithoutPassword } = validation.data;
    // Hash the password.
    const hashedPassword = await hashPassword(password);

    // STEP 4: Create a user in the db.
    // Create new user.
    const signedUpUser = await authSignUp({
      ...userWithoutPassword,
      password: hashedPassword,
    });

    // STEP 5: Save the user into session..
    // Save user into session.
    req.session.user = signedUpUser;

    // STEP 6: Return the signed up user.
    // Send response with the signed up user.
    return res.status(StatusCodes.ACCEPTED).send({
      statusCode: StatusCodes.ACCEPTED,
      statusMessage: `Successfully signed up user with email ${validation.data.emailAddress}`,
      data: userWithoutPassword,
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
