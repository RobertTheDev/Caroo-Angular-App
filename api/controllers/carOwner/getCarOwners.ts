import CarOwnerPrismaService from 'api/providers/prisma/carOwner.service';
import { Request, Response } from 'express';
import { ReasonPhrases, StatusCodes } from 'http-status-codes';

// This controller gets car owners.

export default async function getCarOwners(_req: Request, res: Response) {
  try {
    // Declare and user car owner service.
    const carOwnerPrismaService = new CarOwnerPrismaService();

    // Find car owners.
    const data = await carOwnerPrismaService.findAll();

    // Return car owners.
    return res.status(StatusCodes.OK).send({
      message: `Successfully found car owners.`,
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
