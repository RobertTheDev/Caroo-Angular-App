import { Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import winstonLogger from 'api/utils/winstonLogger';
import isDateUnexpired from 'api/lib/isDateUnexpired';
import { format } from 'date-fns';
import sendEmailVerificationTokenSchema from 'models/account/validators/sendEmailVerificationToken.schema';
import { findUserById } from 'api/providers/prisma/user.service';
import { updateAccountWithEmailVerificationToken } from 'api/providers/prisma/account.service';

// This controller sends an email verification token to the users email.
// To perform this we use the sendgrid API to send a token to email.
// We also insert the token into the user table to be retrieved when the verify account handler is called.

export default async function sendEmailVerificationToken(
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
    // Get the user's id and email address.
    const { id } = user;

    // STEP 2: Get the user's data.
    // Find user using the id received from session.
    const findUser = await findUserById(id);
    // If no user is found we return a 404 error.
    if (!findUser) {
      return res.status(StatusCodes.NOT_FOUND).send({
        statusCode: StatusCodes.NOT_FOUND,
        statusMessage: `User with id ${id} was not found.`,
      });
    }

    // STEP 3: Validate the request body.
    // Get the request body.
    const { body } = req;
    // Validate the request body.
    const validation = await sendEmailVerificationTokenSchema.safeParseAsync(
      body,
    );
    // If validation is unsuccessful then return a valdation error message.
    if (!validation.success) {
      return res.status(StatusCodes.BAD_REQUEST).send({
        statusCode: StatusCodes.BAD_REQUEST,
        statusMessage: validation.error.errors[0].message,
      });
    }

    // STEP 4: Check the user's email has not been verified.
    // Return an error if the user email has already been verfied.
    if (findUser.emailVerified) {
      return res.status(StatusCodes.BAD_REQUEST).send({
        statusCode: StatusCodes.BAD_REQUEST,
        statusMessage: `Your email was verified on ${format(
          findUser.emailVerified,
          'HH:mm, dd MMMM yyyy',
        )}.`,
      });
    }

    // STEP 5: Check the user's email verfication token has expired.
    // Check user token has an expiry or return error.
    if (!findUser.emailVerificationTokenExpiry) {
      return res.status(StatusCodes.NOT_FOUND).send({
        statusCode: StatusCodes.NOT_FOUND,
        statusMessage: `The email verification token has no expiry.`,
      });
    }
    // Check user token has not expired or return error.
    if (isDateUnexpired(findUser.emailVerificationTokenExpiry)) {
      return res.status(StatusCodes.BAD_REQUEST).send({
        statusCode: StatusCodes.BAD_REQUEST,
        statusMessage: `Your email verification token expires 10 minutes after your last request. Please wait until ${format(
          findUser.emailVerificationTokenExpiry,
          'HH:mm',
        )} to request a new one.`,
      });
    }

    // STEP 6: Update user with email verification token.
    const updatedUser = await updateAccountWithEmailVerificationToken(
      id,
      validation.data,
    );
    // Return the updated user.
    return res.status(StatusCodes.OK).send({
      statusCode: StatusCodes.OK,
      statusMessage: `Successfully updated user email verification token with email address ${updatedUser.emailAddress}.`,
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
