import { UserAvatarService } from 'api/providers/userAvatar.service';
import * as express from 'express';
import { ReasonPhrases, StatusCodes } from 'http-status-codes';

// This controller gets a user avatar by its id.

export default async function getUserAvatarById(
  req: express.Request,
  res: express.Response,
) {
  try {
    // Get id from params.
    const { id } = req.params;

    // Declare and use user avatar service.
    const userAvatarService = new UserAvatarService();

    // Find user avatar by id.
    const data = await userAvatarService.findOneById(id);

    // Return user avatar.
    return res.status(StatusCodes.OK).send({
      message: `Successfully found user avatar with id ${id}.`,
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
