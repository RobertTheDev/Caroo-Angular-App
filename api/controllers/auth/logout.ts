import { Request, Response } from 'express';
import { ReasonPhrases, StatusCodes } from 'http-status-codes';
import winstonLogger from 'api/utils/winstonLogger';

export default async function logout(req: Request, res: Response) {
  try {
    req.session.user = null;

    req.session.destroy;

    return res
      .status(StatusCodes.OK)
      .send({ message: 'Successfully logged out.', data: null });
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
