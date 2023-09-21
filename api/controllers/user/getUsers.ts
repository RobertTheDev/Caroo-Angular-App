import UserPrismaService from 'api/providers/prisma/user.service';
import winstonLogger from 'api/utils/winstonLogger';
import { Request, Response } from 'express';
import { ReasonPhrases, StatusCodes } from 'http-status-codes';

// This controller gets all users.

export default async function getUsers(_req: Request, res: Response) {
  try {
    // Declare and use user service.
    const userService = new UserPrismaService();

    // Find users.
    const data = await userService.findAll();

    // Return the users.
    return res.status(StatusCodes.OK).send({
      message: `Successfully found all users.`,
      data,
    });
  } catch (error) {
    // Log the error.
    winstonLogger.error(`Error getting user:`, error);

    // Catch and return an error if found.
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).send({
      statusCode: StatusCodes.INTERNAL_SERVER_ERROR,
      statusMessage: ReasonPhrases.INTERNAL_SERVER_ERROR,
    });
  }
}
