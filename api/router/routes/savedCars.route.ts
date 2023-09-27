import createSavedCar from 'api/controllers/savedCar/createSavedCar';
import deleteSavedCarsByUserId from 'api/controllers/savedCar/deleteSavedCarsByUserId';
import getSavedCarsByUserId from 'api/controllers/savedCar/getSavedCarsByUserId';
import isAuthenticated from 'api/middlewares/auth/isAuthenticated';
import { Router } from 'express';

// Saved cars router defines all the routes used in modifying saved cars data.
// Saved cars router is exported into the app router file.

// Define saved cars router using the express router.
const savedCarsRouter = Router();

savedCarsRouter.delete('/', isAuthenticated, deleteSavedCarsByUserId);

savedCarsRouter.get('/', getSavedCarsByUserId);

savedCarsRouter.post('/:carId', isAuthenticated, createSavedCar);

export default savedCarsRouter;
