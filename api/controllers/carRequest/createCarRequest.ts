import {
  createOneCarRequest,
  findOneCarRequestByCarIdAndUserId,
} from 'api/providers/prisma/carRequest.service';
import winstonLogger from 'api/utils/winstonLogger';
import { Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import createCarRequestSchema from 'models/carRequest/validators/createCarRequest.schema';
import { findCarById } from 'api/providers/prisma/car.service';

// This controller creates a new car request.

export default async function createCarRequest(req: Request, res: Response) {
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
    // Get the user's id from session.
    const { id: userId } = user;

    //  STEP 2: Get the car id from request params.
    const { carId } = req.params;
    // If no car id is provided return an error.
    if (!carId) {
      return res.status(StatusCodes.BAD_REQUEST).send({
        statusCode: StatusCodes.BAD_REQUEST,
        statusMessage: 'No car id was provided.',
      });
    }

    // STEP 3: Check user is not the owner.
    const car = await findCarById(carId);
    if (!car) {
      return res.status(StatusCodes.BAD_REQUEST).send({
        statusCode: StatusCodes.BAD_REQUEST,
        statusMessage: 'No car was found.',
      });
    }
    if (car.ownerId === user.id) {
      return res.status(StatusCodes.BAD_REQUEST).send({
        statusCode: StatusCodes.BAD_REQUEST,
        statusMessage:
          'You cannot make a request as you are the owner of the car.',
      });
    }

    // STEP 4: Check user has not already requested this car.
    const hasUserAlreadyRequested = await findOneCarRequestByCarIdAndUserId(
      carId,
      userId,
    );
    if (hasUserAlreadyRequested) {
      return res.status(StatusCodes.BAD_REQUEST).send({
        statusCode: StatusCodes.BAD_REQUEST,
        statusMessage: 'You cannot make a new request for this car.',
      });
    }

    // STEP 5: Validate the request body.
    // Get the request body.
    const { body } = req;
    // Validate the body.
    const validation = await createCarRequestSchema.safeParseAsync({
      ...body,
      carId,
      userId,
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

    // STEP 6: Create car request.
    const data = await createOneCarRequest(validation.data);
    // Send response with the created car request.
    return res.status(StatusCodes.CREATED).send({
      statusCode: StatusCodes.CREATED,
      statusMessage: `A car request has been successfully created.`,
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
