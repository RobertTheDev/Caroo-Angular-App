import changeEmailAddress from 'api/controllers/account/changeEmailAddress';
import changePassword from 'api/controllers/account/changePassword';
import closeAccount from 'api/controllers/account/closeAccount';
import sendEmailVerificationToken from 'api/controllers/account/sendEmailVerificationToken';
import verifyEmailWithToken from 'api/controllers/account/verifyEmailWithToken';
import isEmailVerificationTokenExpired from 'api/middlewares/account/isEmailVerificationTokenExpired';
import isAuthenticated from 'api/middlewares/auth/isAuthenticated';
import { Router } from 'express';

// Define account router using the express router.
const accountRouter = Router();

accountRouter.delete('/close-account', isAuthenticated, closeAccount);

accountRouter.put('/update-email-address', isAuthenticated, changeEmailAddress);

accountRouter.put('/update-password', isAuthenticated, changePassword);

accountRouter.put(
  '/verify-email-address/:emailVerificationToken',
  isAuthenticated,
  isEmailVerificationTokenExpired,
  verifyEmailWithToken,
);

accountRouter.post(
  '/send-email-verification-token',
  isAuthenticated,
  sendEmailVerificationToken,
);

export default accountRouter;
