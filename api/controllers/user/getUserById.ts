import UserPrismaService from 'api/providers/prisma/user.service';
import { Request, Response } from 'express';
import { ReasonPhrases, StatusCodes } from 'http-status-codes';

// This controller gets a user by its id.

export default async function getUserById(req: Request, res: Response) {
  try {
    // Get the id from params.
    const { id } = req.params;

    // Declare and use user service.
    const userService = new UserPrismaService();

    // Find the user by its id.
    const data = await userService.findOneById(id);

    // If user not found return a not found error.
    if (!data) {
      return res.status(StatusCodes.NOT_FOUND).send({
        message: `User with id ${id} not found.`,
        data,
      });
    }

    // Return the found user.
    return res.status(StatusCodes.OK).send({
      message: `Successfully found a user by its id ${id}.`,
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
