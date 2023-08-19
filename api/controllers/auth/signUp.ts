import signUpSchema from '../../validators/auth/signUp.schema';
import * as express from 'express';
import { ReasonPhrases, StatusCodes } from 'http-status-codes';
import { User } from '@prisma/client';
import { UserService } from 'api/providers/user.service';

// This controller creates a user and signs it into session.

export default async function signUp(
  req: express.Request,
  res: express.Response,
) {
  try {
    // Get the request body.
    const { body } = req;

    // Declare and use user service.
    const userService = new UserService();

    // Validate the body.
    const validation = await signUpSchema.safeParseAsync(body);

    // If validation is successful then create a new user.
    if (validation.success) {
      // Check email is available by checking a user does not exist in database.
      const checkEmailIsAvailable = await userService.findOneByEmail(
        validation.data.email,
      );

      // If not user exists with the email address then continue.
      if (checkEmailIsAvailable) {
        // If user exists throw a bad request error.
        return res.status(StatusCodes.BAD_REQUEST).send({
          message: ReasonPhrases.BAD_REQUEST,
          error: `The user with email ${validation.data.email} already exists. Please use a different email address.`,
        });
      }

      // Create new user.
      const signedUpUser = await userService.createUser(validation.data);

      // Seperate password from create user response.
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const { password, ...data } = signedUpUser as User;

      // Save user into session.
      req.session.user = data;

      // Send response with the signed up user.
      return res.status(StatusCodes.ACCEPTED).send({
        message: `Successfully signed up user with email ${validation.data.email}`,
        data,
      });
    }
    // If validation is unsuccessful send an error response with validation error.
    return res.status(StatusCodes.BAD_REQUEST).send({
      message: ReasonPhrases.BAD_REQUEST,
      error: validation.error,
    });
  } catch (error) {
    // If an error occurs - catch and send the error.
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).send({
      message: ReasonPhrases.INTERNAL_SERVER_ERROR,
      error,
    });
  }
}