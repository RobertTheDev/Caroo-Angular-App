import changeEmailAddress from 'api/controllers/account/changeEmailAddress';
import changePassword from 'api/controllers/account/changePassword';
import closeAccount from 'api/controllers/account/closeAccount';
import sendEmailVerificationToken from 'api/controllers/account/sendEmailVerificationToken';
import verifyEmailWithToken from 'api/controllers/account/verifyEmailWithToken';
import isEmailVerificationTokenExpired from 'api/middlewares/account/isEmailVerificationTokenExpired';
import isAuthenticated from 'api/middlewares/auth/isAuthenticated';
import isPasswordCorrect from 'api/middlewares/auth/isPasswordCorrect';
import { Router } from 'express';

// Define account router using the express router.
const accountRouter = Router();

accountRouter.put(
  '/change-email-address',
  isAuthenticated,
  isPasswordCorrect,
  changeEmailAddress,
);

accountRouter.put(
  '/change-password',
  isAuthenticated,
  isPasswordCorrect,
  changePassword,
);

accountRouter.delete(
  '/close-account',
  isAuthenticated,
  isPasswordCorrect,
  closeAccount,
);

accountRouter.put(
  '/verify-email-address/:emailVerificationToken',
  isAuthenticated,
  isEmailVerificationTokenExpired,
  verifyEmailWithToken,
);

accountRouter.post(
  '/verify-email-address/send-token',
  isAuthenticated,
  sendEmailVerificationToken,
);

export default accountRouter;
