// import isPasswordCorrect from 'api/lib/auth/isPasswordCorrect';
import UserPrismaService from 'api/providers/prisma/user.service';
import winstonLogger from 'api/utils/winstonLogger';
import { Request, Response } from 'express';
import { ReasonPhrases, StatusCodes } from 'http-status-codes';
import changePasswordSchema from 'models/account/validators/changePassword.schema';

export default async function changePassword(req: Request, res: Response) {
  try {
    // Get the user from the session.
    const { user } = req.session;

    // Get the request body.
    const { body } = req;

    // Use the user prisma service to get the user handlers.
    const userPrismaService = new UserPrismaService();

    // If no user is found return a not found error.
    if (!user) {
      return res.status(StatusCodes.NOT_FOUND).send({
        statusCode: StatusCodes.NOT_FOUND,
        statusMessage: 'No user was found in the session.',
      });
    }

    // Validate the request body.
    const validation = await changePasswordSchema.safeParseAsync(body);

    // If validation is not successful return a bad request error.
    if (!validation.success) {
      return res.status(StatusCodes.BAD_REQUEST).send({
        statusCode: StatusCodes.BAD_REQUEST,
        statusMessage: validation.error.issues[0].message,
      });
    }

    // Get data from validated body.
    const { data } = validation;

    const findUser = await userPrismaService.findOneByEmailAddress(
      user.emailAddress,
    );
    if (!findUser) {
      return res.status(StatusCodes.NOT_FOUND).send({
        message: ReasonPhrases.NOT_FOUND,
        error: `No user was found.`,
      });
    }

    return res.status(StatusCodes.OK).send({
      message: ReasonPhrases.OK,
      data,
    });
  } catch (error) {
    // Log the error.
    winstonLogger.error(`Error changing password:`, error);

    // Catch and return an error if found.
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).send({
      statusCode: StatusCodes.INTERNAL_SERVER_ERROR,
      statusMessage: ReasonPhrases.INTERNAL_SERVER_ERROR,
    });
  }
}
