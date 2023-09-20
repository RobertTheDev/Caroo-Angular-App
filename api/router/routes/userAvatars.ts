import { Router } from 'express';

// User avatars router defines all the routes used in modifying user avatars data.
// User avatars router is exported into the app router file.

// Define user avatars router using the express router.
const userAvatarsRouter = Router();

userAvatarsRouter.get('/user-avatars', (_req, res) => {
  res.status(200).send('avatars');
});

export default userAvatarsRouter;
