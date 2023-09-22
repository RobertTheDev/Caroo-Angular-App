import UserPrismaService from 'api/providers/prisma/user.service';
import winstonLogger from 'api/utils/winstonLogger';
import { Request, Response } from 'express';
import { ReasonPhrases, StatusCodes } from 'http-status-codes';
import closeAccountSchema from 'models/account/validators/closeAccount.schema';

// This handler closes an account by deleting user using the user data in session.
export default async function closeAccount(req: Request, res: Response) {
  try {
    // // Get user from session.
    const { user } = req.session;

    // Get the request body.
    const { body } = req;

    // Use the user prisma service to get the user handlers.
    const userPrismaService = new UserPrismaService();

    // If no user is found return a not found error.
    if (!user) {
      return res.status(StatusCodes.NOT_FOUND).send({
        statusCode: StatusCodes.NOT_FOUND,
        statusMessage: 'No user was found in the session.',
      });
    }

    // Validate the request body.
    const validation = await closeAccountSchema.safeParseAsync(body);

    // If validation is not successful return a bad request error.
    if (!validation.success) {
      return res.status(StatusCodes.BAD_REQUEST).send({
        statusCode: StatusCodes.BAD_REQUEST,
        statusMessage: validation.error.issues[0].message,
      });
    }

    // Update the user with the id from session and data from validated body.
    const deletedUser = await userPrismaService.deleteOneById(user.id);

    // Remove user from session.
    req.session.user = null;

    // Destroy the express session.
    req.session.destroy;

    // Return the updated user.
    return res.status(StatusCodes.OK).send({
      statusCode: StatusCodes.OK,
      statusMessage: `Successfully deleted the user with id ${deletedUser.id} and email address ${deletedUser.emailAddress}.`,
      data: deletedUser,
    });
  } catch (error) {
    // Log the error.
    winstonLogger.error(`Error closing account:`, error);

    // Catch and return an error if found.
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).send({
      statusCode: StatusCodes.INTERNAL_SERVER_ERROR,
      statusMessage: ReasonPhrases.INTERNAL_SERVER_ERROR,
    });
  }
}
