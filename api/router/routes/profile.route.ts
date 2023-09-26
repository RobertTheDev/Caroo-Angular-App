import getProfile from 'api/controllers/profile/getProfile';
import updateProfile from 'api/controllers/profile/updateProfile';
import isAuthenticated from 'api/middlewares/auth/isAuthenticated';
import { Router } from 'express';

// Define profile router using the express router.
const profileRouter = Router();

profileRouter.get('/', isAuthenticated, getProfile);

profileRouter.put('/update-profile', isAuthenticated, updateProfile);

export default profileRouter;
