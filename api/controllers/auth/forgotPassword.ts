import { Request, Response } from 'express';
import { ReasonPhrases, StatusCodes } from 'http-status-codes';
import winstonLogger from 'api/utils/winstonLogger';

export default async function forgotPassword(_req: Request, res: Response) {
  try {
    return res.status(StatusCodes.OK).send({
      statusCode: StatusCodes.OK,
      statusMessage: ReasonPhrases.OK,
    });
  } catch (error) {
    // Log the error.
    winstonLogger.error(`Error during user sign up:`, error);
    // If an error occurs - catch and send the error.
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).send({
      statusCode: StatusCodes.INTERNAL_SERVER_ERROR,
      statusMessage: ReasonPhrases.INTERNAL_SERVER_ERROR,
    });
  }
}
