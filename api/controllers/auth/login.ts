import { Request, Response } from 'express';
import { ReasonPhrases, StatusCodes } from 'http-status-codes';
import UserPrismaService from 'api/providers/prisma/user.service';
import loginSchema from 'models/auth/validators/login.schema';
import winstonLogger from 'api/utils/winstonLogger';

// This controller handles user login.

export default async function login(req: Request, res: Response) {
  try {
    // Get the request body.
    const { body } = req;

    // Declare and use user service to get access to user handlers.
    const userPrismaService = new UserPrismaService();

    // Validate the body using login schema.
    const validation = await loginSchema.safeParseAsync(body);

    // If validation fails then return a bad request error.
    if (!validation.success) {
      return res.status(StatusCodes.BAD_REQUEST).send({
        statusCode: StatusCodes.BAD_REQUEST,
        statusMessage: validation.error.errors[0].message,
      });
    }

    // Get email address from validation body.
    const { emailAddress } = validation.data;

    // Get user by email address.
    const findUser = await userPrismaService.findOneByEmailAddress(
      emailAddress,
    );

    // If user not found return a not found error.
    if (!findUser) {
      return res.status(StatusCodes.NOT_FOUND).send({
        statusCode: StatusCodes.NOT_FOUND,
        statusMessage: `User with email ${body.email} could not be found.`,
      });
    }

    // Seperate password from create user response.
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { password, ...data } = findUser;

    // Save user into session.
    req.session.user = data;

    // Return the logged in user.
    return res.status(StatusCodes.OK).send({
      statusCode: StatusCodes.OK,
      statusMessage: `Successfully logged in.`,
      data,
    });
  } catch (error) {
    // Log the error.
    winstonLogger.error(`Error during user sign in:`, error);

    // If an error occurs - catch and send the error.
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).send({
      statusCode: StatusCodes.INTERNAL_SERVER_ERROR,
      statusMessage: ReasonPhrases.INTERNAL_SERVER_ERROR,
    });
  }
}
