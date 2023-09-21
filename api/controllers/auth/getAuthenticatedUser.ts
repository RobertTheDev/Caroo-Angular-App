import { Request, Response } from 'express';
import { ReasonPhrases, StatusCodes } from 'http-status-codes';

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
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).send({
      message: ReasonPhrases.INTERNAL_SERVER_ERROR,
      error,
    });
  }
}
