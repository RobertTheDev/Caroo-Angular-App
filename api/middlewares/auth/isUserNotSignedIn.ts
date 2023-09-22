import winstonLogger from 'api/utils/winstonLogger';
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
      statusCode: StatusCodes.BAD_REQUEST,
      statusMessage: `You are already signed in.`,
    });
  } catch (error) {
    // Log the error.
    winstonLogger.error(`Error checking if user is signed in:`, error);

    // Catch and return an error if found.
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).send({
      statusCode: StatusCodes.INTERNAL_SERVER_ERROR,
      statusMessage: ReasonPhrases.INTERNAL_SERVER_ERROR,
    });
  }
}
