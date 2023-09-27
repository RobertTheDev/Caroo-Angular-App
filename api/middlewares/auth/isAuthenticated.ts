import winstonLogger from 'api/utils/winstonLogger';
import { Request, Response, NextFunction } from 'express';
import { StatusCodes } from 'http-status-codes';

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
  } catch (error: unknown) {
    // Catch and log any errors. If the error is of intance type Error we can add the error message.
    if (error instanceof Error) {
      // Log the error.
      winstonLogger.error(
        `Error in route ${req.method} ${req.originalUrl}: ${error.message}`,
      );
      // If an error occurs - catch and send the error.
      return res.status(StatusCodes.INTERNAL_SERVER_ERROR).send({
        statusCode: StatusCodes.INTERNAL_SERVER_ERROR,
        statusMessage: `An error occurred: ${error.message}`,
      });
    } else {
      // Log the error.
      winstonLogger.error(
        `Error in route ${req.method} ${req.originalUrl}: ${error}`,
      );
      // If an error occurs - catch and send the error.
      return res.status(StatusCodes.INTERNAL_SERVER_ERROR).send({
        statusCode: StatusCodes.INTERNAL_SERVER_ERROR,
        statusMessage: `An error occurred: ${error}`,
      });
    }
  }
}
