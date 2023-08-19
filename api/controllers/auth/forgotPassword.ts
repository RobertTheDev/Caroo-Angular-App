import * as express from 'express';
import { ReasonPhrases, StatusCodes } from 'http-status-codes';

export default async function forgotPassword(
  req: express.Request,
  res: express.Response,
) {
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
