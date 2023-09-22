import sendEmailVerificationToken from 'api/controllers/account/sendEmailVerificationToken';
import verifyEmailWithToken from 'api/controllers/account/verifyEmailWithToken';
import getUserByEmail from 'api/controllers/user/getUserByEmailAddress';
import getUserById from 'api/controllers/user/getUserById';
import getUsers from 'api/controllers/user/getUsers';
import updateUserById from 'api/controllers/user/updateUserById';
import isEmailVerificationTokenExpired from 'api/middlewares/account/isEmailVerificationTokenExpired';
import isAuthenticated from 'api/middlewares/auth/isAuthenticated';
import { Router } from 'express';

// User router defines all the routes used in modifying users data.
// User router is exported into the app router file.

// Define users router using the express router.
const usersRouter = Router();

usersRouter.get('/', getUsers);

usersRouter.get('/:id', getUserById);

usersRouter.get('/email/:email', getUserByEmail);

usersRouter.put('/:id', isAuthenticated, updateUserById);

usersRouter.put(
  '/verify-email-address/:emailVerificationToken',
  isAuthenticated,
  isEmailVerificationTokenExpired,
  verifyEmailWithToken,
);

usersRouter.post(
  '/verify-email-address/send-token',
  isAuthenticated,
  sendEmailVerificationToken,
);

export default usersRouter;
