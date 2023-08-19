import isPasswordCorrect from 'api/lib/auth/isPasswordCorrect';
import { UserService } from 'api/providers/user.service';
import changeEmailSchema from 'api/validators/auth/changeEmail.schema';
import * as express from 'express';
import { ReasonPhrases, StatusCodes } from 'http-status-codes';

export default async function changeEmail(
  req: express.Request,
  res: express.Response,
) {
  try {
    // Get the request body.
    const { body } = req;

    // Get user from session.
    const { user } = req.session;

    // Declare and use user service.
    const userService = new UserService();

    // If no user found return a bad request error.
    if (!user) {
      return res.status(StatusCodes.UNAUTHORIZED).send({
        message: ReasonPhrases.UNAUTHORIZED,
        error: `You are not authorized to perform this action.`,
      });
    }

    // Validate the request body.
    const validation = await changeEmailSchema.safeParseAsync(body);

    if (validation.success) {
      // Check password is correct.

      const findUser = await userService.findOneByEmail(user.email);

      if (!findUser) {
        return res.status(StatusCodes.NOT_FOUND).send({
          message: ReasonPhrases.NOT_FOUND,
          error: `No user was found.`,
        });
      }

      const checkPasswordCorrect = isPasswordCorrect(
        validation.data.password,
        findUser.password,
      );

      if (checkPasswordCorrect) {
        // Change password.
        const data = await userService.updateEmailById(
          validation.data,
          user.id,
        );

        return res.status(StatusCodes.OK).send({
          message: ReasonPhrases.OK,
          data,
        });
      } else {
        return res.status(StatusCodes.UNAUTHORIZED).send({
          message: ReasonPhrases.UNAUTHORIZED,
          error: `The password entered is incorrect`,
        });
      }
    }

    return res.status(StatusCodes.BAD_REQUEST).send({
      message: ReasonPhrases.BAD_REQUEST,
      error: validation.error,
    });
  } catch (error) {
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).send({
      message: ReasonPhrases.INTERNAL_SERVER_ERROR,
      error,
    });
  }
}
