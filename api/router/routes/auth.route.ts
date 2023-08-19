import changeEmail from 'api/controllers/auth/changeEmail';
import changePassword from 'api/controllers/auth/changePassword';
import closeAccount from 'api/controllers/auth/closeAccount';
import forgotPassword from 'api/controllers/auth/forgotPassword';
import getAuthenticatedUser from 'api/controllers/auth/getAuthenticatedUser';
import login from 'api/controllers/auth/login';
import logout from 'api/controllers/auth/logout';
import signUp from 'api/controllers/auth/signUp';
import isAuthenticated from 'api/middlewares/auth/isAuthenticated';
import isUserNotSignedIn from 'api/middlewares/auth/isUserNotSignedIn';

import * as express from 'express';

const authRouter = express.Router();

// Auth router defines all the routes used in modifying user authentication.
// Auth router is exported into the app router file.

authRouter.put('/change-email', isAuthenticated, changeEmail);

authRouter.put('/change-password', isAuthenticated, changePassword);

authRouter.delete('/close-account', isAuthenticated, closeAccount);

authRouter.put('/forgot-password', isUserNotSignedIn, forgotPassword);

authRouter.get('/authenticated-user', isAuthenticated, getAuthenticatedUser);

authRouter.post('/login', isUserNotSignedIn, login);

authRouter.get('/logout', isAuthenticated, logout);

authRouter.post('/sign-up', isUserNotSignedIn, signUp);

export default authRouter;
