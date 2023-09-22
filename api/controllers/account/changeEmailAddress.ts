import changeEmailSchema from 'models/account/validators/changeEmail.schema';
import { Request, Response } from 'express';
import { ReasonPhrases, StatusCodes } from 'http-status-codes';
import UserPrismaService from 'api/providers/prisma/user.service';
import winstonLogger from 'api/utils/winstonLogger';

export default async function changeEmailAddress(req: Request, res: Response) {
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
    const validation = await changeEmailSchema.safeParseAsync(body);

    // If validation is not successful return a bad request error.
    if (!validation.success) {
      return res.status(StatusCodes.BAD_REQUEST).send({
        statusCode: StatusCodes.BAD_REQUEST,
        statusMessage: validation.error.issues[0].message,
      });
    }

    // Get data from validated body.
    const { data } = validation;

    const findUser = await userPrismaService.updateEmailById(data, user.id);

    return res.status(StatusCodes.OK).send({
      statusCode: StatusCodes.OK,
      statusMessage: ReasonPhrases.OK,
      data: findUser,
    });
  } catch (error) {
    // Log the error.
    winstonLogger.error(`Error changing email address:`, error);

    // Catch and return an error if found.
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).send({
      statusCode: StatusCodes.INTERNAL_SERVER_ERROR,
      statusMessage: ReasonPhrases.INTERNAL_SERVER_ERROR,
    });
  }
}
