import { Request, Response } from 'express';
import { ReasonPhrases, StatusCodes } from 'http-status-codes';
import winstonLogger from 'api/utils/winstonLogger';
import AuthPrismaService from 'api/providers/prisma/auth.service';

// This controller uses the user id from session to query db.

export default async function getAuthenticatedUser(
  req: Request,
  res: Response,
) {
  try {
    // Get the user from session.
    const { user } = req.session;

    // Call the auth service to get access to auth handlers.
    const authService = new AuthPrismaService();

    // If no user is sessio return unauthorized error.
    if (!user) {
      return res.status(StatusCodes.UNAUTHORIZED).send({
        statusCode: StatusCodes.UNAUTHORIZED,
        statusMessage: ReasonPhrases.UNAUTHORIZED,
        data: null,
      });
    }

    // Get the id from user.
    const { id } = user;

    // Call auth service get authenticated user handler to get the user.
    const data = await authService.getAuthenticatedUserById(id);

    // Return not found error if no user is found in db.
    if (!data) {
      return res.status(StatusCodes.NOT_FOUND).send({
        statusCode: StatusCodes.NOT_FOUND,
        statusMessage: ReasonPhrases.NOT_FOUND,
        data: null,
      });
    }

    // Return the data.
    return res.status(StatusCodes.OK).send({
      statusCode: StatusCodes.OK,
      statusMessage: ReasonPhrases.OK,
      data,
    });
  } catch (error) {
    // Log the error.
    winstonLogger.error(`Error getting the authenticated user:`, error);

    // If an error occurs - catch and send the error.
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).send({
      statusCode: StatusCodes.INTERNAL_SERVER_ERROR,
      statusMessage: ReasonPhrases.INTERNAL_SERVER_ERROR,
    });
  }
}
