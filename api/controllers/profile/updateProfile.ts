import { updateProfileById } from 'api/providers/prisma/profile.service';
import winstonLogger from 'api/utils/winstonLogger';
import { Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import updateProfileSchema from 'models/account/validators/updateProfile.schema';

// This handler updates the user's profile using the user data in session and the request body.

export default async function updateProfile(req: Request, res: Response) {
  try {
    // STEP 1: Get the user from the session.
    const { user } = req.session;
    // If no user is found we return a 404 error.
    if (!user) {
      return res.status(StatusCodes.UNAUTHORIZED).send({
        statusCode: StatusCodes.UNAUTHORIZED,
        statusMessage: `No user is signed in.`,
      });
    }
    const { id: userId } = user;

    // STEP 2: Validate the request body.
    // Get the request body.
    const { body } = req;
    // Validate the request body.
    const validation = await updateProfileSchema.safeParseAsync(body);
    // If validation is not successful return a bad request error.
    if (!validation.success) {
      return res.status(StatusCodes.BAD_REQUEST).send({
        statusCode: StatusCodes.BAD_REQUEST,
        statusMessage: validation.error.issues[0].message,
      });
    }

    // STEP 3: Update the user with the id from session and data from validated body.
    const updatedProfile = await updateProfileById(validation.data, userId);
    // Return the updated user.
    return res.status(StatusCodes.OK).send({
      statusCode: StatusCodes.OK,
      statusMessage: `Successfully updated the user with email ${updatedProfile.emailAddress}.`,
      data: updatedProfile,
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
