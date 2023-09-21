import UserPrismaService from 'api/providers/prisma/user.service';
import updateUserSchema from 'models/user/validators/updateUser.schema';
import { Request, Response } from 'express';
import { ReasonPhrases, StatusCodes } from 'http-status-codes';

// This controller updates a user by its id.

export default async function updateUserById(req: Request, res: Response) {
  try {
    // Get the request body.
    const { body } = req.body;

    // Get the id from params.
    const { id } = req.params;

    // Declare and use user service.
    const userPrismaService = new UserPrismaService();

    // Validate the body.
    const validation = await updateUserSchema.safeParseAsync(body);

    // If validation is successful then update the user.
    if (validation.success) {
      // Update the user by id.
      const updatedUser = await userPrismaService.updateOneById(
        validation.data,
        id,
      );

      // Return the newly updated user.
      return res.status(StatusCodes.ACCEPTED).send(updatedUser);
    }

    // Return a bad request error if there is a validation error.
    return res.status(StatusCodes.BAD_REQUEST).send({
      message: ReasonPhrases.BAD_REQUEST,
      error: validation.error,
    });
  } catch (error) {
    // Catch and return an error if found.
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).send({
      statusCode: StatusCodes.INTERNAL_SERVER_ERROR,
      statusMessage: ReasonPhrases.INTERNAL_SERVER_ERROR,
    });
  }
}
