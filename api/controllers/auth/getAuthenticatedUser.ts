import { Request, Response } from 'express';
import { ReasonPhrases, StatusCodes } from 'http-status-codes';
import winstonLogger from 'api/utils/winstonLogger';

// This controller finds and returns the authenticated user from session.

export default async function getAuthenticatedUser(
  req: Request,
  res: Response,
) {
  try {
    // Get the user from session.
    const data = req.session.user;

    // Return the user.
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
