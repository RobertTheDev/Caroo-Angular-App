// import isPasswordCorrect from 'api/lib/auth/isPasswordCorrect';
import { hashPassword } from 'api/lib/passwordManagement';
import AccountPrismaService from 'api/providers/prisma/account.service';
import winstonLogger from 'api/utils/winstonLogger';
import { Request, Response } from 'express';
import { ReasonPhrases, StatusCodes } from 'http-status-codes';
import changePasswordSchema from 'models/account/validators/updatePassword.schema';

export default async function changePassword(req: Request, res: Response) {
  try {
    // Get the user from the session.
    const { user } = req.session;

    const accountService = new AccountPrismaService();

    if (!user) {
      return res.status(StatusCodes.NOT_FOUND).send({
        statusCode: StatusCodes.NOT_FOUND,
        statusMessage: 'No user was found in the session.',
      });
    }

    const { id } = user;

    // Get the request body.
    const { body } = req;

    const validation = await changePasswordSchema.safeParseAsync(body);

    if (!validation.success) {
      return res.status(StatusCodes.BAD_REQUEST).send({
        statusCode: StatusCodes.BAD_REQUEST,
        statusMessage: validation.error.errors[0].message,
      });
    }

    const hashedPassword = await hashPassword(validation.data.newPassword);

    const data = await accountService.updatePassword(id, hashedPassword);

    return res.status(StatusCodes.OK).send({
      statusCode: StatusCodes.OK,
      statusMessage: `Succesfully updated user password.`,
      data,
    });
  } catch (error) {
    // Log the error.
    winstonLogger.error(`Error changing password:`, error);

    // Catch and return an error if found.
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).send({
      statusCode: StatusCodes.INTERNAL_SERVER_ERROR,
      statusMessage: ReasonPhrases.INTERNAL_SERVER_ERROR,
    });
  }
}
