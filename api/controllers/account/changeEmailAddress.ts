import { verifyPassword } from 'api/lib/passwordManagement';
import AccountPrismaService from 'api/providers/prisma/account.service';
import UserPrismaService from 'api/providers/prisma/user.service';
import winstonLogger from 'api/utils/winstonLogger';
import { Request, Response } from 'express';
import { ReasonPhrases, StatusCodes } from 'http-status-codes';
import changeEmailSchema from 'models/account/validators/updateEmail.schema';

export default async function changeEmailAddress(req: Request, res: Response) {
  try {
    //     // Get the user id from the session.
    const { user } = req.session;

    // If no user is found return a not found error.
    if (!user) {
      return res.status(StatusCodes.UNAUTHORIZED).send({
        statusCode: StatusCodes.UNAUTHORIZED,
        statusMessage: 'You are not authorized.',
      });
    }

    const { id } = user;

    const accountService = new AccountPrismaService();

    const userService = new UserPrismaService();

    const { body } = req;

    const validation = await changeEmailSchema.safeParseAsync(body);

    if (!validation.success) {
      return res.status(StatusCodes.BAD_REQUEST).send({
        statusCode: StatusCodes.BAD_REQUEST,
        statusMessage: validation.error.errors[0].message,
      });
    }

    const findUser = await userService.findOneById(id);

    if (!findUser) {
      return res.status(StatusCodes.NOT_FOUND).send({
        statusCode: StatusCodes.NOT_FOUND,
        statusMessage: `User with id ${id} was not found.`,
      });
    }

    const isPasswordCorrect = await verifyPassword(
      validation.data.password,
      findUser.password,
    );

    if (!isPasswordCorrect) {
      return res.status(StatusCodes.BAD_REQUEST).send({
        statusCode: StatusCodes.BAD_REQUEST,
        statusMessage: 'Password entered is incorrect.',
      });
    }

    const data = await accountService.updateEmailAddress(id, validation.data);

    return res.status(StatusCodes.OK).send({
      statusCode: StatusCodes.OK,
      statusMessage: `Succesfully updated user email to ${validation.data.emailAddress}`,
      data,
    });
  } catch (error) {
    // Log the error.
    winstonLogger.error(`Error changing email address:`, error);

    // Catch and return an error if found.
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).send({
      statusCode: StatusCodes.INTERNAL_SERVER_ERROR,
      statusMessage: ReasonPhrases.INTERNAL_SERVER_ERROR,
    });
  }
}
