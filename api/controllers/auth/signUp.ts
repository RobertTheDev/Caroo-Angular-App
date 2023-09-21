import signUpSchema from '../../../models/auth/validators/signUp.schema';
import { Request, Response } from 'express';
import { ReasonPhrases, StatusCodes } from 'http-status-codes';
import { User } from '@prisma/client';
import UserPrismaService from 'api/providers/prisma/user.service';
import winstonLogger from 'api/utils/winstonLogger';

// This controller creates a user and signs them into session.

export default async function signUp(req: Request, res: Response) {
  try {
    // Get the request body.
    const { body } = req;

    // Declare and use user service.
    const userPrismaService = new UserPrismaService();

    // Validate the body.
    const validation = await signUpSchema.safeParseAsync(body);

    // If validation is unsuccessful send an error response with validation error.
    if (!validation.success) {
      return res.status(StatusCodes.BAD_REQUEST).send({
        message: validation.error.issues[0].message,
      });
    }

    // Create new user.
    const signedUpUser = await userPrismaService.createUser(validation.data);

    // Seperate password from create user response.
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { password, ...data } = signedUpUser as User;

    // Save user into session.
    req.session.user = data;

    // Send response with the signed up user.
    return res.status(StatusCodes.ACCEPTED).send({
      message: `Successfully signed up user with email ${validation.data.emailAddress}`,
      data,
    });
  } catch (error) {
    // Log the error.
    winstonLogger.error(`Error during user sign up:`, error);
    // If an error occurs - catch and send the error.
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).send({
      message: ReasonPhrases.INTERNAL_SERVER_ERROR,
    });
  }
}
