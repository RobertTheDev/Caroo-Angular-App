import * as express from 'express';

const savedCarsRouter = express.Router();

savedCarsRouter.get('/', (_req, res) => {
  res.status(200).send('saved cars');
});

export default savedCarsRouter;
