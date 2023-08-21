import getCars from 'api/controllers/cars/getCars';
import * as express from 'express';

// Cars router defines all the routes used in modifying cars data.
// Cars router is exported into the app router file.

const carsRouter = express.Router();

carsRouter.get('/', getCars);

export default carsRouter;
