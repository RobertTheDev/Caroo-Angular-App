import { UserService } from 'api/providers/user.service';
import * as express from 'express';
import { ReasonPhrases, StatusCodes } from 'http-status-codes';

// This controller gets a user by its email.

export default async function getUserByEmail(
  req: express.Request,
  res: express.Response,
) {
  try {
    // Get email from the params.
    const { email } = req.params;

    // Declare and use user service.
    const userService = new UserService();

    // Find the user by email.
    const data = await userService.findOneByEmail(email);

    // If user not found return a not found error.
    if (!data) {
      return res.status(StatusCodes.NOT_FOUND).send({
        message: `User with email ${email} not found.`,
        data,
      });
    }

    // Return the user.
    return res.status(StatusCodes.OK).send({
      message: `Successfully found user with email ${email}.`,
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
