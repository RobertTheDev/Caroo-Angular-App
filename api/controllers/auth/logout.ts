import * as express from 'express';
import { ReasonPhrases, StatusCodes } from 'http-status-codes';

export default async function logout(
  req: express.Request,
  res: express.Response,
) {
  try {
    req.session.user = null;

    req.session.destroy;

    return res
      .status(StatusCodes.OK)
      .send({ message: 'Successfully logged out.', data: null });
  } catch (error) {
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).send({
      message: ReasonPhrases.INTERNAL_SERVER_ERROR,
      error,
    });
  }
}
