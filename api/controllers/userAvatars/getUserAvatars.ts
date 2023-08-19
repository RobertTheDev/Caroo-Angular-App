import { UserAvatarService } from 'api/providers/userAvatar.service';
import * as express from 'express';
import { ReasonPhrases, StatusCodes } from 'http-status-codes';

// This controller gets all user avatars.

export default async function getUserAvatars(
  req: express.Request,
  res: express.Response,
) {
  try {
    // Declare and use user avatar service.
    const userAvatarService = new UserAvatarService();

    // Get all user avatars.
    const data = await userAvatarService.findAll();

    // Return user avatars.
    return res.status(StatusCodes.OK).send({
      message: `Successfully found all user avatars.`,
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
