import createSavedCar from 'api/controllers/savedCar/createSavedCar';
import deleteSavedCarById from 'api/controllers/savedCar/deleteSavedCarById';
import deleteSavedCarsByCarId from 'api/controllers/savedCar/deleteSavedCarsByCarId';
import deleteSavedCarsByUserId from 'api/controllers/savedCar/deleteSavedCarsByUserId';
import getSavedCarById from 'api/controllers/savedCar/getSavedCarById';
import getSavedCars from 'api/controllers/savedCar/getSavedCars';
import getSavedCarsByCarId from 'api/controllers/savedCar/getSavedCarsByCarId';
import getSavedCarsByUserId from 'api/controllers/savedCar/getSavedCarsByUserId';
import isAuthenticated from 'api/middlewares/auth/isAuthenticated';
import { Router } from 'express';

// Saved cars router defines all the routes used in modifying saved cars data.
// Saved cars router is exported into the app router file.

// Define saved cars router using the express router.
const savedCarsRouter = Router();

savedCarsRouter.delete('/:id', isAuthenticated, deleteSavedCarById);

savedCarsRouter.delete('/car/:carId', isAuthenticated, deleteSavedCarsByCarId);

savedCarsRouter.delete(
  '/user/:userId',
  isAuthenticated,
  deleteSavedCarsByUserId,
);

savedCarsRouter.get('/', getSavedCars);

savedCarsRouter.get('/:id', getSavedCarById);

savedCarsRouter.get('/car/:carId', getSavedCarsByCarId);

savedCarsRouter.get('/user/:userId', getSavedCarsByUserId);

savedCarsRouter.get('/:id', getSavedCarById);

savedCarsRouter.post('/save-car', isAuthenticated, createSavedCar);

export default savedCarsRouter;
