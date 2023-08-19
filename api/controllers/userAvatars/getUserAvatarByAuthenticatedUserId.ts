import { UserAvatarService } from 'api/providers/userAvatar.service';
import * as express from 'express';
import { ReasonPhrases, StatusCodes } from 'http-status-codes';

// This controller gets a user avatar by matching user id with authenticated user id.

export default async function getUserAvatarByAuthenticatedUserId(
  req: express.Request,
  res: express.Response,
) {
  try {
    // Throw unauthorized error if no user in session.
    if (!req.session.user) {
      return res.status(StatusCodes.UNAUTHORIZED).send({
        message: ReasonPhrases.UNAUTHORIZED,
        data: null,
      });
    }

    // Get user id from session.
    const userId = req.session.user.id;

    // Declare and use user avatar service.
    const userAvatarService = new UserAvatarService();

    // Find user avatar by authenticated user id.
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
