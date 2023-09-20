import { Router } from 'express';

// Saved cars router defines all the routes used in modifying saved cars data.
// Saved cars router is exported into the app router file.

// Define saved cars router using the express router.
const savedCarsRouter = Router();

savedCarsRouter.get('/saved-cars', (_req, res) => {
  res.status(200).send('saved cars');
});

export default savedCarsRouter;
