import { findCarById } from 'api/providers/prisma/car.service';
import {
  deleteOneCarImageById,
  findOneCarImageById,
} from 'api/providers/prisma/carImage.service';
import winstonLogger from 'api/utils/winstonLogger';
import { Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';

// This controller deletes a car image by its id.

export default async function deleteCarImageById(req: Request, res: Response) {
  try {
    // STEP 1: Get the user and user id from session.
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

    // STEP 2: Get the car image id from params.
    // Get id from params.
    const { id } = req.params;
    if (!id) {
      return res.status(StatusCodes.BAD_REQUEST).send({
        statusCode: StatusCodes.BAD_REQUEST,
        statusMessage: 'No id was provided.',
      });
    }

    // STEP 3: Get car image from db.
    const findCarImage = await findOneCarImageById(id);
    if (!findCarImage) {
      return res.status(StatusCodes.BAD_REQUEST).send({
        statusCode: StatusCodes.BAD_REQUEST,
        statusMessage: 'No car image with that id was found.',
      });
    }

    // STEP 4: Get car from db.
    // Check car image has car id.
    if (!findCarImage.carId) {
      return res.status(StatusCodes.BAD_REQUEST).send({
        statusCode: StatusCodes.BAD_REQUEST,
        statusMessage: 'No car id was provided from the car image.',
      });
    }
    // Find the car using the car id.
    const findCar = await findCarById(findCarImage.carId);
    if (!findCar) {
      return res.status(StatusCodes.BAD_REQUEST).send({
        statusCode: StatusCodes.BAD_REQUEST,
        statusMessage: 'No car with that id was found.',
      });
    }

    // STEP 5: Check user is the car owner.
    if (findCar.ownerId === userId) {
      return res.status(StatusCodes.UNAUTHORIZED).send({
        statusCode: StatusCodes.UNAUTHORIZED,
        statusMessage: 'You are not authorised to perform this action.',
      });
    }

    // STEP 6: Delete the car image.
    // Delete a car image by its id.
    await deleteOneCarImageById(id);

    // STEP 7: Return the success message.
    // Return a response confirming deletion.
    return res.status(StatusCodes.OK).send({
      statusCode: StatusCodes.OK,
      statusMessage: `Successfully deleted car image with id ${id}.`,
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
