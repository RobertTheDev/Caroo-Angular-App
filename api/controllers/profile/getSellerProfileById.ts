import UserPrismaService from 'api/providers/prisma/user.service';
import winstonLogger from 'api/utils/winstonLogger';
import { Request, Response } from 'express';
import { ReasonPhrases, StatusCodes } from 'http-status-codes';

// This controller creates a saved car.

export default async function getSellerProfileById(
  req: Request,
  res: Response,
) {
  try {
    const userPrismaService = new UserPrismaService();

    const { id } = req.params;

    const seller = await userPrismaService.findOneById(id);

    return res.status(StatusCodes.OK).send({
      statusCode: StatusCodes.OK,
      statusMessage: seller,
    });
  } catch (error) {
    // Log the error.
    winstonLogger.error(`Error getting seller profile by id:`, error);

    // Catch and return an error if found.
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).send({
      statusCode: StatusCodes.INTERNAL_SERVER_ERROR,
      statusMessage: ReasonPhrases.INTERNAL_SERVER_ERROR,
    });
  }
}
