import * as express from 'express';

const helloRouter = express.Router();

helloRouter.get('/', (_req, res) => {
  res.status(200).send('goo');
});

export default helloRouter;
