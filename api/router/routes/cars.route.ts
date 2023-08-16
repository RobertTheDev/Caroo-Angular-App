import * as express from 'express';

const carsRouter = express.Router();

carsRouter.get('/cars', (_req, res) => {
  res.status(200).send('cars');
});

export default carsRouter;
