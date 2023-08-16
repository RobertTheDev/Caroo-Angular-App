import * as express from 'express';

const carOwnersRouter = express.Router();

carOwnersRouter.get('/', (_req, res) => {
  res.status(200).send('car owners');
});

export default carOwnersRouter;
