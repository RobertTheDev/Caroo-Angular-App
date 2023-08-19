import { UserAvatarService } from 'api/providers/userAvatar.service';
import * as express from 'express';
import { ReasonPhrases, StatusCodes } from 'http-status-codes';

// This controller deletes a user avatar by its id.

export default async function deleteUserAvatarById(
  req: express.Request,
  res: express.Response,
) {
  try {
    // Get id from params.
    const { id } = req.params;

    // Declare and use user avatar service.
    const userAvatarService = new UserAvatarService();

    // Delete a user avatar by its id.
    await userAvatarService.deleteOneById(id);

    // Return a response message confirming deletion.
    return res.status(StatusCodes.OK).send({
      message: `Successfully deleted user avatar with id ${id}.`,
      data: null,
    });
  } catch (error) {
    // Catch and return an error if found.
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).send({
      message: ReasonPhrases.INTERNAL_SERVER_ERROR,
      error,
    });
  }
}
