import updateUserSchema from 'models/user/validators/updateUser.schema';
import { Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import winstonLogger from 'api/utils/winstonLogger';
import { updateOneUserById } from 'api/providers/prisma/user.service';

// This controller updates a user by its id.

export default async function updateUserById(req: Request, res: Response) {
  try {
    // STEP 1: Validate the request body.
    // Get the request body.
    const { body } = req;
    // Validate the body.
    const validation = await updateUserSchema.safeParseAsync(body);
    // If validation is successful then update the user.
    if (!validation.success) {
      // Return a bad request error if there is a validation error.
      return res.status(StatusCodes.BAD_REQUEST).send({
        statusCode: StatusCodes.BAD_REQUEST,
        statusMessage: validation.error.errors[0].message,
      });
    }

    // STEP 2: Find and update the user by id.
    // Get the id from params.
    const { id } = req.params;
    // Update the user by id.
    const updatedUser = await updateOneUserById(validation.data, id);
    // Return the newly updated user.
    return res.status(StatusCodes.ACCEPTED).send({
      statusCode: StatusCodes.ACCEPTED,
      statusMessage: `Successfully updated user with id ${id}`,
      data: updatedUser,
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
