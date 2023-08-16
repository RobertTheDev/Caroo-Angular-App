import * as express from 'express';

const authRouter = express.Router();

authRouter.get('/auth', (_req, res) => {
  res.status(200).send('users');
});

export default authRouter;
