import changeEmailSchema from 'models/settings/validators/changeEmail.schema';
import { Request, Response } from 'express';
import { ReasonPhrases, StatusCodes } from 'http-status-codes';
import UserPrismaService from 'api/providers/prisma/user.service';
import winstonLogger from 'api/utils/winstonLogger';

export default async function changeEmail(req: Request, res: Response) {
  try {
    // Get the request body.
    const { body } = req;

    // Get user from session.
    const { user } = req.session;

    // Declare and use user service.
    const userPrismaService = new UserPrismaService();

    // If no user found return a bad request error.
    if (!user) {
      return res.status(StatusCodes.UNAUTHORIZED).send({
        message: ReasonPhrases.UNAUTHORIZED,
        error: `You are not authorized to perform this action.`,
      });
    }

    // Validate the request body.
    const validation = await changeEmailSchema.safeParseAsync(body);

    if (validation.success) {
      // Check password is correct.

      const findUser = await userPrismaService.findOneByEmailAddress(
        user.emailAddress,
      );

      if (!findUser) {
        return res.status(StatusCodes.NOT_FOUND).send({
          message: ReasonPhrases.NOT_FOUND,
          error: `No user was found.`,
        });
      }
    }

    return res.status(StatusCodes.BAD_REQUEST).send({
      message: ReasonPhrases.BAD_REQUEST,
      error: validation,
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
