import { Router } from 'express';
import changeEmail from 'api/controllers/settings/changeEmail';
import changePassword from 'api/controllers/settings/changePassword';
import closeAccount from 'api/controllers/settings/closeAccount';
import forgotPassword from 'api/controllers/auth/forgotPassword';
import getAuthenticatedUser from 'api/controllers/auth/getAuthenticatedUser';
import login from 'api/controllers/auth/login';
import logout from 'api/controllers/auth/logout';
import signUp from 'api/controllers/auth/signUp';
import isAuthenticated from 'api/middlewares/auth/isAuthenticated';
import isUserNotSignedIn from 'api/middlewares/auth/isUserNotSignedIn';

// Define auth router using the express router.
const authRouter = Router();

// Auth router defines all the routes used in modifying user authentication.
// Auth router is exported into the app router file.

authRouter.delete('/close-account', isAuthenticated, closeAccount);

authRouter.delete('/logout', isAuthenticated, logout);

authRouter.get('/authenticated-user', isAuthenticated, getAuthenticatedUser);

authRouter.post('/login', isUserNotSignedIn, login);

authRouter.post('/sign-up', isUserNotSignedIn, signUp);

authRouter.put('/change-email', isAuthenticated, changeEmail);

authRouter.put('/change-password', isAuthenticated, changePassword);

authRouter.put('/forgot-password', isUserNotSignedIn, forgotPassword);

export default authRouter;
