import { Router } from 'express';

// Car owners router defines all the routes used in modifying car owners data.
// Car owners router is exported into the app router file.

// Define car owners router using the express router.
const carOwnersRouter = Router();

carOwnersRouter.get('/', (_req, res) => {
  res.status(200).send('car owners');
});

export default carOwnersRouter;
