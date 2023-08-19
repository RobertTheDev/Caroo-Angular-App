import { UserAvatarService } from 'api/providers/userAvatar.service';
import updateUserAvatarSchema from 'api/validators/userAvatars/updateUserAvatar.schema';
import * as express from 'express';
import { ReasonPhrases, StatusCodes } from 'http-status-codes';

export default async function updateUserAvatarById(
  req: express.Request,
  res: express.Response,
) {
  try {
    // Get the request body.
    const { body } = req.body;

    // Get id from params.
    const { id } = req.params;

    // Declare and use user avatar service.
    const userAvatarService = new UserAvatarService();

    // Validate the body.
    const validation = await updateUserAvatarSchema.safeParseAsync(body);

    if (validation.success) {
      // Update user avatar by id.
      const data = await userAvatarService.updateOneById(validation.data, id);

      // Return user avatar.
      return res.send({
        data,
      });
    }
    // Return bad request error if validation fails.
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
