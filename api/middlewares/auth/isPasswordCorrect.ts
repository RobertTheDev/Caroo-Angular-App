import { Request, Response, NextFunction } from 'express';
import { StatusCodes, ReasonPhrases } from 'http-status-codes';
import UserPrismaService from 'api/providers/prisma/user.service';
import winstonLogger from 'api/utils/winstonLogger';
import checkPasswordSchema from 'models/shared/validators/checkPassword.schema';
import { verifyPassword } from 'api/lib/passwordManagement';

// This middleware checks to see if the password in the body is correct.

export default async function isPasswordCorrect(
  req: Request,
  res: Response,
  next: NextFunction,
) {
  try {
    // Get the request body.
    const { body } = req;

    // Validate the body using the check password schema.
    const validation = await checkPasswordSchema.safeParseAsync(body);

    // If validation fails, return a bad request error.
    if (!validation.success) {
      return res.status(StatusCodes.BAD_REQUEST).send({
        statusCode: StatusCodes.BAD_REQUEST,
        statusMessage: validation.error.errors[0].message,
      });
    }

    // Get values from the validated body.
    const { emailAddress, password } = validation.data;

    // Call the user service to get access to user prisma handlers.
    const userService = new UserPrismaService();

    // Find user by email address.
    const findUser = await userService.findOneByEmailAddress(emailAddress);

    // If user does not exist, return a not found error.
    if (!findUser) {
      return res.status(StatusCodes.NOT_FOUND).send({
        statusCode: StatusCodes.NOT_FOUND,
        statusMessage: `Account with email address ${emailAddress} not found.`,
      });
    }

    // Compare passwords and check the user has inputted correct password..
    const checkPassword = await verifyPassword(password, findUser.password);

    // If the password is correct, continue.
    if (!checkPassword) {
      // Return a bad request error if the password is incorrect.
      return res.status(StatusCodes.BAD_REQUEST).send({
        statusCode: StatusCodes.BAD_REQUEST,
        statusMessage:
          'The password you have entered is incorrect. Please try again.',
      });
    }
    return next();
  } catch (error) {
    // Log the error.
    winstonLogger.error('Error checking if password is correct:', error);

    // Catch and return an error if found.
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).send({
      statusCode: StatusCodes.INTERNAL_SERVER_ERROR,
      statusMessage: ReasonPhrases.INTERNAL_SERVER_ERROR,
    });
  }
}
