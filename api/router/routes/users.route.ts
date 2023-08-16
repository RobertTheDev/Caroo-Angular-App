import * as express from 'express';

const usersRouter = express.Router();

usersRouter.get('/users', (_req, res) => {
  res.status(200).send('users');
});

export default usersRouter;
