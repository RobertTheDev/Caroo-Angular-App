import { Request, Response } from 'express';
import { ReasonPhrases, StatusCodes } from 'http-status-codes';

export default async function forgotPassword(_req: Request, res: Response) {
  try {
    return res.status(StatusCodes.OK).send({
      message: ReasonPhrases.OK,
    });
  } catch (error) {
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).send({
      message: ReasonPhrases.INTERNAL_SERVER_ERROR,
      error,
    });
  }
}
