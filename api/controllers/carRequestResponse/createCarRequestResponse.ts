import { findOneCarRequestById } from 'api/providers/prisma/carRequest.service';
import { createOneCarRequestResponse } from 'api/providers/prisma/carRequestResponse.service';
import winstonLogger from 'api/utils/winstonLogger';
import { Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import createCarRequestResponseSchema from 'models/carRequestResponse/validators/createCarRequestResponse.schema';

// This controller creates a new car request.

export default async function createCarRequestResponse(
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

    // STEP 2: Get the car request id.
    const { carRequestId } = req.params;
    if (!carRequestId) {
      return res.status(StatusCodes.BAD_REQUEST).send({
        statusCode: StatusCodes.BAD_REQUEST,
        statusMessage: 'No car id was provided.',
      });
    }

    // STEP 3: Check the responder is the car owner.
    const carRequest = await findOneCarRequestById(carRequestId);
    if (!carRequest) {
      return res.status(StatusCodes.BAD_REQUEST).send({
        statusCode: StatusCodes.BAD_REQUEST,
        statusMessage: 'No car request was found.',
      });
    }
    if (!carRequest.car) {
      return res.status(StatusCodes.BAD_REQUEST).send({
        statusCode: StatusCodes.BAD_REQUEST,
        statusMessage: 'No car was found in the car request.',
      });
    }
    const { ownerId } = carRequest.car;
    if (ownerId !== user.id) {
      return res.status(StatusCodes.BAD_REQUEST).send({
        statusCode: StatusCodes.BAD_REQUEST,
        statusMessage: 'Only the car owner can reply to this response.',
      });
    }

    // STEP 4: Validate the request body.
    const validation = await createCarRequestResponseSchema.safeParseAsync({
      ...req.body,
      userId,
      carRequestId,
    });
    // If validation is successful then create a car request.
    if (!validation.success) {
      // If validation is unsuccessful send an error response with validation error.
      return res.status(StatusCodes.BAD_REQUEST).send({
        statusCode: StatusCodes.BAD_REQUEST,
        statusMessage: validation.error.errors[0].message,
        error: validation.error,
      });
    }

    // STEP 5: Create the car request response.
    const data = await createOneCarRequestResponse(validation.data);
    // Send response with the created car request.
    return res.status(StatusCodes.ACCEPTED).send({
      statusCode: StatusCodes.ACCEPTED,
      statusMessage: `A car request has been successfully created with id ${data.id}`,
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
