import { Request, Response } from 'express';
import { ReasonPhrases, StatusCodes } from 'http-status-codes';
import UserPrismaService from 'api/providers/prisma/user.service';
import loginSchema from 'models/auth/validators/login.schema';
import winstonLogger from 'api/utils/winstonLogger';
export default async function login(req: Request, res: Response) {
  try {
    // Get the request body.
    const { body } = req;

    // Declare and use user service.
    const userPrismaService = new UserPrismaService();

    const validation = await loginSchema.safeParseAsync(body);

    if (!validation.success) {
      return res.status(StatusCodes.BAD_REQUEST).send({
        message: ReasonPhrases.BAD_REQUEST,
        error: validation.error,
      });
    }

    const { emailAddress } = validation.data;

    const findUser = await userPrismaService.findOneByEmailAddress(
      emailAddress,
    );

    if (!findUser) {
      return res.status(StatusCodes.NOT_FOUND).send({
        message: ReasonPhrases.NOT_FOUND,
        error: `User with email ${body.email} could not be found.`,
      });
    }

    // Seperate password from create user response.
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { password, ...data } = findUser;

    req.session.user = data;

    return res.status(StatusCodes.OK).send({
      message: `Successfully logged in.`,
      data,
    });
  } catch (error) {
    // Log the error.
    winstonLogger.error(`Error during user sign in:`, error);

    // If an error occurs - catch and send the error.
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).send({
      statusCode: StatusCodes.INTERNAL_SERVER_ERROR,
      statusMessage: ReasonPhrases.INTERNAL_SERVER_ERROR,
    });
  }
}
