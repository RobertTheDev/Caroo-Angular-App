import winstonLogger from 'api/utils/winstonLogger';
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
      statusCode: StatusCodes.UNAUTHORIZED,
      statusMessage:
        'You are not authenticated to perform this action. Please sign in and try again.',
    });
  } catch (error) {
    // Log the error.
    winstonLogger.error(`Error checking if user is authenticated:`, error);

    // Catch and return an error if found.
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).send({
      statusCode: StatusCodes.INTERNAL_SERVER_ERROR,
      statusMessage: ReasonPhrases.INTERNAL_SERVER_ERROR,
    });
  }
}
