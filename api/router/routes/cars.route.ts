import createCar from 'api/controllers/car/createCar';
import deleteCarsByUserId from 'api/controllers/car/deleteCarsByUserId';
import getCarById from 'api/controllers/car/getCarById';
import getCars from 'api/controllers/car/getCars';
import updateCarById from 'api/controllers/car/updateCarById';
import isAuthenticated from 'api/middlewares/auth/isAuthenticated';
import { Router } from 'express';

// Cars router defines all the routes used in modifying cars data.
// Cars router is exported into the app router file.

// Define cars router using the express router.
const carsRouter = Router();

carsRouter.delete('/:userId', isAuthenticated, updateCarById);

carsRouter.delete('/owner/:userId', isAuthenticated, deleteCarsByUserId);

carsRouter.get('/', getCars);

carsRouter.get('/:id', getCarById);

carsRouter.post('/create-car', isAuthenticated, createCar);

carsRouter.put('/:id', isAuthenticated, updateCarById);

export default carsRouter;
