import { Request, Response } from 'express';
import { ReasonPhrases, StatusCodes } from 'http-status-codes';
import winstonLogger from 'api/utils/winstonLogger';
export default async function getAuthenticatedUser(
  req: Request,
  res: Response,
) {
  try {
    const data = req.session.user;

    return res.status(StatusCodes.OK).send({
      message: ReasonPhrases.OK,
      data,
    });
  } catch (error) {
    // Log the error.
    winstonLogger.error(`Error during user sign up:`, error);
    // If an error occurs - catch and send the error.
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).send({
      message: ReasonPhrases.INTERNAL_SERVER_ERROR,
    });
  }
}
