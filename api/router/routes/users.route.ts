import * as express from 'express';

// User router defines all the routes used in modifying users data.
// User router is exported into the app router file.

const usersRouter = express.Router();

usersRouter.get('/users', (_req, res) => {
  res.status(200).send('users');
});

export default usersRouter;
