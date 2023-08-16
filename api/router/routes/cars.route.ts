import * as express from 'express';

const carsRouter = express.Router();

carsRouter.get('/', (_req, res) => {
  res.status(200).send('cars');
});

export default carsRouter;
