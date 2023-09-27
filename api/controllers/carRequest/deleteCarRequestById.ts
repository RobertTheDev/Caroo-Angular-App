import {
  deleteOneCarRequestById,
  findOneCarRequestById,
} from 'api/providers/prisma/carRequest.service';
import winstonLogger from 'api/utils/winstonLogger';
import { Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';

// This controller deletes a car request by its id.
// Tod do this we need to find the car request and check user is authorized to perform this actio.

export default async function deleteCarRequestById(
  req: Request,
  res: Response,
) {
  try {
    // STEP 1: Get the user id from session.
    // Get the user from the session.
    const { user } = req.session;
    // If no user is found return a not found error.
    if (!user) {
      return res.status(StatusCodes.UNAUTHORIZED).send({
        statusCode: StatusCodes.UNAUTHORIZED,
        statusMessage: 'You are not authorised to perform this action.',
      });
    }
    // Get the user's id.
    const { id: userId } = user;

    // STEP 2: Get the id from params.
    // Get id from params.
    const { id } = req.params;
    // If no car id is provided return an error.
    if (!id) {
      return res.status(StatusCodes.BAD_REQUEST).send({
        statusCode: StatusCodes.BAD_REQUEST,
        statusMessage: 'No id was provided.',
      });
    }

    // STEP 3: Find car request by id.
    const findCarRequest = await findOneCarRequestById(id);
    // Return not found error if no car request found.
    if (!findCarRequest) {
      return res.status(StatusCodes.NOT_FOUND).send({
        statusCode: StatusCodes.NOT_FOUND,
        statusMessage: `Car request with id ${id} not found.`,
        data: null,
      });
    }

    // STEP 4: Check to see user is authorized to delete car request.
    if (findCarRequest.userId !== userId) {
      return res.status(StatusCodes.UNAUTHORIZED).send({
        statusCode: StatusCodes.UNAUTHORIZED,
        statusMessage: `You are not authorised to perform this action.`,
      });
    }

    // STEP 5: Delete the car request.
    // Delete car request by id.
    await deleteOneCarRequestById(id);
    // Return a response confirming deletion.
    return res.status(StatusCodes.OK).send({
      statusCode: StatusCodes.OK,
      statusMessage: `Successfully deleted car request with id ${id}.`,
      data: null,
    });
  } catch (error: unknown) {
    // Catch and log any errors. If the error is of intance type Error we can add the error message.
    if (error instanceof Error) {
      // Log the error.
      winstonLogger.error(
        `Error in route ${req.method} ${req.originalUrl}: ${error.message}`,
      );
      // If an error occurs - catch and send the error.
      return res.status(StatusCodes.INTERNAL_SERVER_ERROR).send({
        statusCode: StatusCodes.INTERNAL_SERVER_ERROR,
        statusMessage: `An error occurred: ${error.message}`,
      });
    } else {
      // Log the error.
      winstonLogger.error(
        `Error in route ${req.method} ${req.originalUrl}: ${error}`,
      );
      // If an error occurs - catch and send the error.
      return res.status(StatusCodes.INTERNAL_SERVER_ERROR).send({
        statusCode: StatusCodes.INTERNAL_SERVER_ERROR,
        statusMessage: `An error occurred: ${error}`,
      });
    }
  }
}
