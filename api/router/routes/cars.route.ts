import getCarById from 'api/controllers/car/getCarById';
import getCars from 'api/controllers/car/getCars';
import { Router } from 'express';

// Cars router defines all the routes used in modifying cars data.
// Cars router is exported into the app router file.

// Define cars router using the express router.
const carsRouter = Router();

carsRouter.get('/', getCars);

carsRouter.get('/:id', getCarById);

export default carsRouter;
