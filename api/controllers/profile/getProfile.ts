import ProfilePrismaService from 'api/providers/prisma/profile.service';
import winstonLogger from 'api/utils/winstonLogger';
import { Request, Response } from 'express';
import { ReasonPhrases, StatusCodes } from 'http-status-codes';

// This handler uses session to get the user from the database to get all data not stored in the session.

export default async function getProfile(req: Request, res: Response) {
  try {
    // Get the user from the session.
    const { user } = req.session;

    // Use the user prisma service to get the user handlers.
    const profilePrismaService = new ProfilePrismaService();

    // If no user is found return a not found error.
    if (!user) {
      return res.status(StatusCodes.NOT_FOUND).send({
        statusCode: StatusCodes.NOT_FOUND,
        statusMessage: 'No user was found in the session.',
      });
    }

    // Find user from the db to get all the data not in stored in session.
    const findUser = await profilePrismaService.getProfile(user.id);

    // If no user found return a not found error.
    if (!findUser) {
      return res.status(StatusCodes.NOT_FOUND).send({
        statusCode: StatusCodes.NOT_FOUND,
        statusMessage: 'No user was found in the database.',
      });
    }

    // Return the user with the data.
    return res.status(StatusCodes.OK).send({
      statusMessage: ReasonPhrases.OK,
      data: findUser,
    });
  } catch (error) {
    // Log the error.
    winstonLogger.error(`Error getting account profile:`, error);

    // Catch and return an error if found.
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).send({
      statusCode: StatusCodes.INTERNAL_SERVER_ERROR,
      statusMessage: ReasonPhrases.INTERNAL_SERVER_ERROR,
    });
  }
}
