import * as express from 'express';

// Cars router defines all the routes used in modifying cars data.
// Cars router is exported into the app router file.

const carsRouter = express.Router();

carsRouter.get('/cars', (_req, res) => {
  res.status(200).send('cars');
});

export default carsRouter;
