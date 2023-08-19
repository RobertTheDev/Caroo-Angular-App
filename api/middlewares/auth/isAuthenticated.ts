import { Request, Response, NextFunction } from 'express';
import { ReasonPhrases, StatusCodes } from 'http-status-codes';

// This middleware ensures the user is authenticated before performing a server request.

export default function isAuthenticated(
  req: Request,
  res: Response,
  next: NextFunction,
) {
  try {
    // Check user is signed in.
    if (req.session.user) return next();

    // Return an unauthorized error if user is not signed in and authorized.
    return res.status(StatusCodes.UNAUTHORIZED).send({
      message: ReasonPhrases.UNAUTHORIZED,
      error:
        'You are not authenticated to perform this action. Please sign in and try again.',
    });
  } catch (error) {
    // Catch and return an error if found.
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).send({
      message: ReasonPhrases.INTERNAL_SERVER_ERROR,
      error,
    });
  }
}
