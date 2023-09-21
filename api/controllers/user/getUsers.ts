import UserPrismaService from 'api/providers/prisma/user.service';
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
    // Catch and return an error if found.
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).send({
      message: ReasonPhrases.INTERNAL_SERVER_ERROR,
      error,
    });
  }
}
