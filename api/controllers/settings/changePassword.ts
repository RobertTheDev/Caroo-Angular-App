import isPasswordCorrect from 'api/lib/auth/isPasswordCorrect';
import UserPrismaService from 'api/providers/prisma/user.service';
import { Request, Response } from 'express';
import { ReasonPhrases, StatusCodes } from 'http-status-codes';
import changePasswordSchema from 'models/settings/validators/changePassword.schema';

export default async function changePassword(req: Request, res: Response) {
  try {
    // Get the request body.
    const { body } = req;

    // Get user from session.
    const { user } = req.session;

    // Declare and use user service.
    const userPrismaService = new UserPrismaService();

    // If no user found return a bad request error.
    if (!user) {
      return res.status(StatusCodes.UNAUTHORIZED).send({
        message: ReasonPhrases.UNAUTHORIZED,
        error: `You are not authorized to perform this action.`,
      });
    }

    // Validate the request body.
    const validation = await changePasswordSchema.safeParseAsync(body);

    if (validation.success) {
      // Check password is correct.

      const findUser = await userPrismaService.findOneByEmailAddress(
        user.emailAddress,
      );
      if (!findUser) {
        return res.status(StatusCodes.NOT_FOUND).send({
          message: ReasonPhrases.NOT_FOUND,
          error: `No user was found.`,
        });
      }

      const checkPasswordCorrect = isPasswordCorrect(
        validation.data.currentPassword,
        findUser.password,
      );

      if (checkPasswordCorrect) {
        // Change password.
        const data = await userPrismaService.updatePasswordById(
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
      statusCode: StatusCodes.INTERNAL_SERVER_ERROR,
      statusMessage: ReasonPhrases.INTERNAL_SERVER_ERROR,
    });
  }
}
