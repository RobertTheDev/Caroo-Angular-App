import { Request, Response } from 'express';
import { ReasonPhrases, StatusCodes } from 'http-status-codes';
import updateCarRequestSchema from 'models/carRequest/validators/updateCarRequest.schema';
import winstonLogger from 'api/utils/winstonLogger';
import {
  findOneCarRequestResponseById,
  updateOneCarRequestResponseById,
} from 'api/providers/prisma/carRequestResponse.service';

// This controller updates a car request by its id.

export default async function updateCarRequestResponseById(
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

    // STEP 2: Get id from params.
    const { id } = req.params;
    // If no id provided return an error.
    if (!id) {
      return res.status(StatusCodes.BAD_REQUEST).send({
        statusCode: StatusCodes.BAD_REQUEST,
        statusMessage: `No id was provided.`,
      });
    }

    // STEP 3: Validate the request body.
    // Get request body.
    const { body } = req.body;
    // Validate the body.
    const validation = await updateCarRequestSchema.safeParseAsync({
      ...body,
      userId,
    });
    // If validation is unsuccessful return an error.
    if (!validation.success) {
      return res.status(StatusCodes.BAD_REQUEST).send({
        statusCode: StatusCodes.BAD_REQUEST,
        statusMessage: ReasonPhrases.BAD_REQUEST,
        error: `The email you have entered does not have a match in our records.`,
      });
    }

    // STEP 4: Get the car request from db.
    const findCarRequest = await findOneCarRequestResponseById(id);
    // Return not found error if no car request found.
    if (!findCarRequest) {
      return res.status(StatusCodes.NOT_FOUND).send({
        statusCode: StatusCodes.NOT_FOUND,
        statusMessage: `Car request with id ${id} not found.`,
        data: null,
      });
    }

    // STEP 5: Check to see if user is the car request owner.
    if (findCarRequest.userId !== userId) {
      return res.status(StatusCodes.UNAUTHORIZED).send({
        statusCode: StatusCodes.UNAUTHORIZED,
        statusMessage: `You are not authorised to perform this action.`,
      });
    }

    // STEP 6: Update the car request by id.
    const data = await updateOneCarRequestResponseById(validation.data, id);

    // STEP 7: Return the updated car request.
    return res.status(StatusCodes.OK).send({
      statusCode: StatusCodes.OK,
      statusMessage: `Successfully updated car request with id ${id}.`,
      data,
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
