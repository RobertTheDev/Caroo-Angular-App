import * as express from 'express';

const authRouter = express.Router();

// Auth router defines all the routes used in modifying user authentication.
// Auth router is exported into the app router file.

authRouter.get('/auth', (_req, res) => {
  res.status(200).send('users');
});

export default authRouter;
