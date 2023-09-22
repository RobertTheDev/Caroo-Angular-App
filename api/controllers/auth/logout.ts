import { Request, Response } from 'express';
import { ReasonPhrases, StatusCodes } from 'http-status-codes';
import winstonLogger from 'api/utils/winstonLogger';

// This controller handles user logout.
export default async function logout(req: Request, res: Response) {
  try {
    // Remove user from session.
    req.session.user = null;

    // Destroy the express session.
    req.session.destroy;

    // Return an ok message when completed.
    return res.status(StatusCodes.OK).send({
      statusCode: StatusCodes.OK,
      statusMessage: 'Successfully logged out.',
      data: null,
    });
  } catch (error) {
    // Log the error.
    winstonLogger.error(`Error during user sign out:`, error);

    // If an error occurs - catch and send the error.
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).send({
      statusCode: StatusCodes.INTERNAL_SERVER_ERROR,
      statusMessage: ReasonPhrases.INTERNAL_SERVER_ERROR,
    });
  }
}
