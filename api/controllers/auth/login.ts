import { Request, Response } from 'express';
import { ReasonPhrases, StatusCodes } from 'http-status-codes';
import UserPrismaService from 'api/providers/prisma/user.service';
import isPasswordCorrect from 'api/lib/auth/isPasswordCorrect';
import { User } from '@prisma/client';
import loginSchema from 'models/auth/validators/login.schema';

export default async function login(req: Request, res: Response) {
  try {
    // Get the request body.
    const { body } = req;

    // Declare and use user service.
    const userPrismaService = new UserPrismaService();

    const validation = await loginSchema.safeParseAsync(body);

    const findUser = await userPrismaService.findOneByEmailAddress(body.email);

    if (!findUser) {
      return res.status(StatusCodes.NOT_FOUND).send({
        message: ReasonPhrases.NOT_FOUND,
        error: `User with email ${body.email} could not be found.`,
      });
    }

    const checkPassword = isPasswordCorrect(body.password, findUser.password);

    if (!checkPassword) {
      return res.status(StatusCodes.BAD_REQUEST).send({
        message: ReasonPhrases.BAD_REQUEST,
        error: `Password not successful.`,
      });
    }

    if (validation.success) {
      const loggedInUser = await userPrismaService.findOneByEmailAddress(
        body.email,
      );

      // Seperate password from create user response.
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const { password, ...data } = loggedInUser as User;

      req.session.user = data;

      return res.status(StatusCodes.OK).send({
        message: `Successfully logged in.`,
        data,
      });
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
