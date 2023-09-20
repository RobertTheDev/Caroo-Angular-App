import getUserByEmail from 'api/controllers/user/getUserByEmail';
import getUserById from 'api/controllers/user/getUserById';
import getUsers from 'api/controllers/user/getUsers';
import { Router } from 'express';

// User router defines all the routes used in modifying users data.
// User router is exported into the app router file.

// Define users router using the express router.
const usersRouter = Router();

usersRouter.get('/', getUsers);

usersRouter.get('/:id', getUserById);

usersRouter.get('/email/:email', getUserByEmail);

export default usersRouter;
