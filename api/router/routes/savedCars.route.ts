import createSavedCar from 'api/controllers/savedCar/createSavedCar';
import deleteSavedCarsByUserId from 'api/controllers/savedCar/deleteSavedCarsByUserId';
import getSavedCarById from 'api/controllers/savedCar/getSavedCarById';
import getSavedCars from 'api/controllers/savedCar/getSavedCars';
import getSavedCarsByUserId from 'api/controllers/savedCar/getSavedCarsByUserId';
import isAuthenticated from 'api/middlewares/auth/isAuthenticated';
import { deleteAllSavedCarsByCarId } from 'api/providers/prisma/savedCar.service';
import { Router } from 'express';

// Saved cars router defines all the routes used in modifying saved cars data.
// Saved cars router is exported into the app router file.

// Define saved cars router using the express router.
const savedCarsRouter = Router();

savedCarsRouter.delete(
  '/car/:carId',
  isAuthenticated,
  deleteAllSavedCarsByCarId,
);

savedCarsRouter.delete(
  '/user/:userId',
  isAuthenticated,
  deleteSavedCarsByUserId,
);

savedCarsRouter.get('/', getSavedCars);

savedCarsRouter.get('/:id', getSavedCarById);

savedCarsRouter.get('/user/:userId', getSavedCarsByUserId);

savedCarsRouter.get('/:id', getSavedCarById);

savedCarsRouter.post('/save-car', isAuthenticated, createSavedCar);

export default savedCarsRouter;
