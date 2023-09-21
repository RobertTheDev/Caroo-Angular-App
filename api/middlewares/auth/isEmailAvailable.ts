import { UserService } from 'api/providers/prisma/user.service';
import { Request, Response, NextFunction } from 'express';
import { ReasonPhrases, StatusCodes } from 'http-status-codes';

// This middleware ensures an email is available and not already in use before performing a server request.

export default async function isEmailAvailable(
  req: Request,
  res: Response,
  next: NextFunction,
) {
  try {
    // Get email from request body.
    const { email } = req.body;

    // Declare and use user service.
    const userService = new UserService();

    // Check email is available by checking a user does not exist in database.
    const checkEmailIsAvailable = await userService.findOneByEmail(email);

    // If not user exists with the email address then continue.
    if (!checkEmailIsAvailable) {
      return next();
    }

    // If user exists throw a bad request error.
    return res.status(StatusCodes.BAD_REQUEST).send({
      message: ReasonPhrases.BAD_REQUEST,
      error: `The user with email ${email} already exists. Please use a different email address.`,
    });
  } catch (error) {
    // Catch and return an error if found.
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).send({
      message: ReasonPhrases.INTERNAL_SERVER_ERROR,
      error,
    });
  }
}
