import * as express from 'express';

// Car owners router defines all the routes used in modifying car owners data.
// Car owners router is exported into the app router file.

const carOwnersRouter = express.Router();

carOwnersRouter.get('/', (_req, res) => {
  res.status(200).send('car owners');
});

export default carOwnersRouter;
