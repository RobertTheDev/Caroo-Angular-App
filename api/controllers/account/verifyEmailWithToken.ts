import { Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import winstonLogger from 'api/utils/winstonLogger';
import {
  findAccountByEmailVerificationToken,
  verifyAccountEmailAddressWithEmailVerificationToken,
} from 'api/providers/prisma/account.service';
import isDateExpired from 'api/lib/isDateExpired';
import { format } from 'date-fns';

// This controller verifies a user's email with an email verification token.
// To do this we need to find the user with the token in the database.
// If user exists we add an email verified field with the current date time.

export default async function verifyEmailWithToken(
  req: Request,
  res: Response,
) {
  try {
    // STEP 1: Get the user id from session.
    // Get the user from the session.
    const { user } = req.session;
    // If no user is found return a not found error.
    if (!user) {
      return res.status(StatusCodes.UNAUTHORIZED).send({
        statusCode: StatusCodes.UNAUTHORIZED,
        statusMessage: 'You are not authorised to perform this action.',
      });
    }

    // STEP 2: Get the user from db using token from the request params.
    // Get the email verification token from the request params.
    const { emailVerificationToken } = req.params;
    // Return an error is no token was provided in the params
    if (!emailVerificationToken) {
      // Return the updated user.
      return res.status(StatusCodes.BAD_REQUEST).send({
        statusCode: StatusCodes.BAD_REQUEST,
        statusMessage: `No email verification token was provided.`,
      });
    }
    // Find the user with the token.
    const findUser = await findAccountByEmailVerificationToken(user.id);
    // If no user is found return a 404..
    if (!findUser) {
      return res.status(StatusCodes.NOT_FOUND).send({
        statusCode: StatusCodes.NOT_FOUND,
        statusMessage: `No email verification token was found.`,
      });
    }

    // STEP 3: Check the user's token has not expired.
    // Return error if token has no expiry.
    if (!findUser.emailVerificationTokenExpiry) {
      return res.status(StatusCodes.BAD_REQUEST).send({
        statusCode: StatusCodes.BAD_REQUEST,
        statusMessage: `Your email verification token has no expiry.`,
      });
    }
    // Return an error if token has expired.
    if (isDateExpired(findUser.emailVerificationTokenExpiry)) {
      return res.status(StatusCodes.BAD_REQUEST).send({
        statusCode: StatusCodes.BAD_REQUEST,
        statusMessage: `Your email verification token expires 10 minutes after your last request. Please wait until ${format(
          findUser.emailVerificationTokenExpiry,
          'HH:mm',
        )} to request a new one.`,
      });
    }

    // STEP 4: Update the user in db to show they are verfied by adding datetime to verified field.
    // Update and verify the user with the token.
    const updatedUser =
      await verifyAccountEmailAddressWithEmailVerificationToken(
        emailVerificationToken,
      );
    // Return the updated user.
    return res.status(StatusCodes.OK).send({
      statusCode: StatusCodes.OK,
      statusMessage: `Successfully verified user with email address ${updatedUser.emailAddress}.`,
      data: updatedUser,
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
