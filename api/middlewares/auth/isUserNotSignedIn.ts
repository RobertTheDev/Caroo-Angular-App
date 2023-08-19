import { Request, Response, NextFunction } from 'express';
import { ReasonPhrases, StatusCodes } from 'http-status-codes';

// This middleware ensures the user is not signed in before performing a server request.

export default function isUserNotSignedIn(
  req: Request,
  res: Response,
  next: NextFunction,
) {
  try {
    // If user is not in session then continue.
    if (!req.session.user) return next();

    // If user is signed in return a bad request error.
    return res.status(StatusCodes.BAD_REQUEST).send({
      message: ReasonPhrases.BAD_REQUEST,
      error: `You are already signed in.`,
    });
  } catch (error) {
    // Catch and return an error if found.
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).send({
      message: ReasonPhrases.INTERNAL_SERVER_ERROR,
      error,
    });
  }
}
