import ProfilePrismaService from 'api/providers/prisma/profile.service';
import winstonLogger from 'api/utils/winstonLogger';
import { Request, Response } from 'express';
import { ReasonPhrases, StatusCodes } from 'http-status-codes';
import updateUserSchema from 'models/user/validators/updateUser.schema';

// This handler updates the user's profile using the user data in session.

export default async function updateProfile(req: Request, res: Response) {
  try {
    // Get the user from the session.
    const { user } = req.session;

    // Get the request body.
    const { body } = req;

    // Use the profile prisma service to get the profile handlers.
    const profilePrismaService = new ProfilePrismaService();

    // If no user is found return a not found error.
    if (!user) {
      return res.status(StatusCodes.NOT_FOUND).send({
        statusCode: StatusCodes.NOT_FOUND,
        statusMessage: 'No user was found in the session.',
      });
    }

    // Validate the request body.
    const validation = await updateUserSchema.safeParseAsync(body);

    // If validation is not successful return a bad request error.
    if (!validation.success) {
      return res.status(StatusCodes.BAD_REQUEST).send({
        statusCode: StatusCodes.BAD_REQUEST,
        statusMessage: validation.error.issues[0].message,
      });
    }

    // Get data from validated body.
    const { data } = validation;

    // Update the user with the id from session and data from validated body.
    const updatedProfile = await profilePrismaService.updateProfile(
      data,
      user.id,
    );

    // Return the updated user.
    return res.status(StatusCodes.OK).send({
      statusCode: StatusCodes.OK,
      statusMessage: `Successfully updated the user with email ${updatedProfile.emailAddress}.`,
      data: updatedProfile,
    });
  } catch (error) {
    // Log the error.
    winstonLogger.error(`Error updating account profile:`, error);

    // Catch and return an error if found.
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).send({
      statusCode: StatusCodes.INTERNAL_SERVER_ERROR,
      statusMessage: ReasonPhrases.INTERNAL_SERVER_ERROR,
    });
  }
}
