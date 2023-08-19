import * as express from 'express';
import { ReasonPhrases, StatusCodes } from 'http-status-codes';
import createUserAvatarSchema from 'api/validators/userAvatars/createUserAvatar.schema';
import { UserAvatarService } from 'api/providers/userAvatar.service';

// This controller creates a user avatar.

export default async function createUserAvatar(
  req: express.Request,
  res: express.Response,
) {
  try {
    // Get user from session.
    const { user } = req.session;

    // Get the request body.
    const { body } = req;

    // Declare and use user avatar service.
    const userAvatarService = new UserAvatarService();

    // Validate the body.
    const validation = await createUserAvatarSchema.safeParseAsync(body);

    // Ensure a user is in session or throw unauthorized error.
    if (!user) {
      return res.send(StatusCodes.UNAUTHORIZED).send({
        message: ReasonPhrases.UNAUTHORIZED,
        data: null,
      });
    }

    // If validation is successful then create a user avatar.
    if (validation.success) {
      // Create user avatar.
      const data = await userAvatarService.createOne(validation.data, user.id);

      // Return response with the created user avatar.
      return res.status(StatusCodes.ACCEPTED).send({ data });
    }
    // If validation is unsuccessful send a bad request error response with validation error.
    return res.status(StatusCodes.BAD_REQUEST).send({
      message: ReasonPhrases.BAD_REQUEST,
      error: validation.error,
    });
  } catch (error) {
    // Catch and return an error if found.
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).send({
      message: ReasonPhrases.INTERNAL_SERVER_ERROR,
      error,
    });
  }
}
