import { Router } from 'express';
import getAuthenticatedUser from 'api/controllers/auth/getAuthenticatedUser';
import login from 'api/controllers/auth/login';
import logout from 'api/controllers/auth/logout';
import signUp from 'api/controllers/auth/signUp';
import isAuthenticated from 'api/middlewares/auth/isAuthenticated';
import isUserNotSignedIn from 'api/middlewares/auth/isUserNotSignedIn';
import resetPasswordWithToken from 'api/controllers/auth/resetPasswordWithToken';
import sendResetPasswordToken from 'api/controllers/auth/sendResetPasswordToken';

// Define auth router using the express router.
const authRouter = Router();

// Auth router defines all the routes used in modifying user authentication.
// Auth router is exported into the app router file.

authRouter.get('/authenticated-user', getAuthenticatedUser);

authRouter.post('/login', isUserNotSignedIn, login);

authRouter.delete('/logout', isAuthenticated, logout);

authRouter.put(
  '/reset-password/:resetPasswordToken',
  isUserNotSignedIn,
  resetPasswordWithToken,
);

authRouter.post(
  '/reset-password/send-token',
  isUserNotSignedIn,
  sendResetPasswordToken,
);

authRouter.post('/sign-up', isUserNotSignedIn, signUp);

export default authRouter;
