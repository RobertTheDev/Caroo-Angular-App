import UserPrismaService from 'api/providers/prisma/user.service';
import winstonLogger from 'api/utils/winstonLogger';
import { Request, Response, NextFunction } from 'express';
import { ReasonPhrases, StatusCodes } from 'http-status-codes';
import validEmailSchema from 'models/shared/validators/validEmail.schema';

// This middleware ensures an email is available and not already in use before performing a server request.

export default async function isEmailAvailable(
  req: Request,
  res: Response,
  next: NextFunction,
) {
  try {
    // Get the request body.
    const { body } = req;

    // Validate the email address from the body.
    const validation = await validEmailSchema.safeParseAsync(body);

    // If validation is unsuccessful send an error response with validation error.
    if (!validation.success) {
      return res.status(StatusCodes.BAD_REQUEST).send({
        message: validation.error.issues[0].message,
      });
    }

    // Get email address from validation data.
    const { emailAddress } = validation.data;

    // Declare and use user service.
    const userPrismaService = new UserPrismaService();

    // Check email is available by checking a user does not exist in database.
    const checkEmailIsAvailable = await userPrismaService.findOneByEmailAddress(
      emailAddress,
    );

    // If no user exists with the email address then continue.
    if (!checkEmailIsAvailable) {
      return next();
    }

    // If user exists throw a bad request error.
    return res.status(StatusCodes.BAD_REQUEST).send({
      message: `The user with email ${emailAddress} already exists. Please use a different email address.`,
    });
  } catch (error) {
    // Log the error.
    winstonLogger.error(`Error checking if email address is available:`, error);
    // Catch and return an error if found.
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).send({
      message: ReasonPhrases.INTERNAL_SERVER_ERROR,
    });
  }
}
