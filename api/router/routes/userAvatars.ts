import * as express from 'express';

const userAvatarsRouter = express.Router();

userAvatarsRouter.get('/', (_req, res) => {
  res.status(200).send('avatars');
});

export default userAvatarsRouter;
