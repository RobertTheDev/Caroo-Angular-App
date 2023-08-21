import getUserByEmail from 'api/controllers/users/getUserByEmail';
import getUserById from 'api/controllers/users/getUserById';
import getUsers from 'api/controllers/users/getUsers';
import * as express from 'express';

// User router defines all the routes used in modifying users data.
// User router is exported into the app router file.

const usersRouter = express.Router();

usersRouter.get('/', getUsers);

usersRouter.get('/:id', getUserById);

usersRouter.get('/email/:email', getUserByEmail);

export default usersRouter;
