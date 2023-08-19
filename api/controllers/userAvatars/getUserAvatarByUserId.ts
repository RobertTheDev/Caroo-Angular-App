import { UserAvatarService } from 'api/providers/userAvatar.service';
import * as express from 'express';
import { ReasonPhrases, StatusCodes } from 'http-status-codes';

// This controller gets a user avatar by its id.

export default async function getUserAvatarById(
  req: express.Request,
  res: express.Response,
) {
  try {
    // Get user id from params.
    const { userId } = req.params;

    // Declare and use user avatar service.
    const userAvatarService = new UserAvatarService();

    // Get user avatar by user id.
    const data = await userAvatarService.findOneByUserId(userId);

    // Return user avatar.
    return res.status(StatusCodes.OK).send({
      message: `Successfully found user avatar with user id ${userId}.`,
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
