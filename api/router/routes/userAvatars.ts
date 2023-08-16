import * as express from 'express';

const userAvatarsRouter = express.Router();

userAvatarsRouter.get('/user-avatars', (_req, res) => {
  res.status(200).send('avatars');
});

export default userAvatarsRouter;
