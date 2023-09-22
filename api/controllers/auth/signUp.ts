import signUpSchema from '../../../models/auth/validators/signUp.schema';
import { Request, Response } from 'express';
import { ReasonPhrases, StatusCodes } from 'http-status-codes';
import { User } from '@prisma/client';
import UserPrismaService from 'api/providers/prisma/user.service';
import winstonLogger from 'api/utils/winstonLogger';
import { hashPassword } from 'api/lib/passwordManagement';

// This controller creates a user and signs them into session.

export default async function signUp(req: Request, res: Response) {
  try {
    // Get the request body.
    const { body } = req;

    // Declare and use user service to get access to user handlers.
    const userPrismaService = new UserPrismaService();

    // Validate the body.
    const validation = await signUpSchema.safeParseAsync(body);

    // If validation is unsuccessful send an error response with validation error.
    if (!validation.success) {
      return res.status(StatusCodes.BAD_REQUEST).send({
        statusCode: StatusCodes.BAD_REQUEST,
        statusMessage: validation.error.issues[0].message,
      });
    }

    // Seperate the password from the validation data.
    const { password, ...userWithoutPassword } = validation.data as User;

    // Hash the password.
    const hashedPassword = await hashPassword(password);

    // Create new user.
    await userPrismaService.createUser({
      ...userWithoutPassword,
      password: hashedPassword,
    });

    // Save user into session.
    req.session.user = userWithoutPassword;

    // Send response with the signed up user.
    return res.status(StatusCodes.ACCEPTED).send({
      statusCode: StatusCodes.ACCEPTED,
      statusMessage: `Successfully signed up user with email ${validation.data.emailAddress}`,
      data: userWithoutPassword,
    });
  } catch (error) {
    // Log the error.
    winstonLogger.error(`Error during user sign up:`, error);

    // If an error occurs - catch and send the error.
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).send({
      statusCode: StatusCodes.INTERNAL_SERVER_ERROR,
      statusMessage: ReasonPhrases.INTERNAL_SERVER_ERROR,
    });
  }
}
