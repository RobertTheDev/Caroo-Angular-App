import UserPrismaService from 'api/providers/prisma/user.service';
import { Request, Response } from 'express';
import { ReasonPhrases, StatusCodes } from 'http-status-codes';

// This controller gets a user by its email.

export default async function getUserByEmailAddress(
  req: Request,
  res: Response,
) {
  try {
    // Get email from the params.
    const { email } = req.params;

    // Declare and use user service.
    const userPrismaService = new UserPrismaService();

    // Find the user by email.
    const data = await userPrismaService.findOneByEmailAddress(email);

    // If user not found return a not found error.
    if (!data) {
      return res.status(StatusCodes.NOT_FOUND).send({
        message: `User with email ${email} not found.`,
        data,
      });
    }

    // Return the user.
    return res.status(StatusCodes.OK).send({
      message: `Successfully found user with email ${email}.`,
      data,
    });
  } catch (error) {
    // Catch and return an error if found.
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).send({
      statusCode: StatusCodes.INTERNAL_SERVER_ERROR,
      statusMessage: ReasonPhrases.INTERNAL_SERVER_ERROR,
    });
  }
}
