import getProfile from 'api/controllers/profile/getProfile';
import getSellerProfileById from 'api/controllers/profile/getSellerProfileById';
import updateProfile from 'api/controllers/profile/updateProfile';
import isAuthenticated from 'api/middlewares/auth/isAuthenticated';
import { Router } from 'express';

// Define profile router using the express router.
const profileRouter = Router();

profileRouter.get('/', isAuthenticated, getProfile);

profileRouter.get('/:id', getSellerProfileById);

profileRouter.put('/update-profile', isAuthenticated, updateProfile);

export default profileRouter;
