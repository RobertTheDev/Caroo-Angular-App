import { Router } from 'express';
import carOwnersRouter from './routes/carOwners.route';
import usersRouter from './routes/users.route';
import userAvatarsRouter from './routes/userAvatars';
import savedCarsRouter from './routes/savedCars.route';
import carsRouter from './routes/cars.route';
import authRouter from './routes/auth.route';

// App router defines all the routes used in the application.
// App router is exported into the main server file.

const appRouter = Router();

appRouter.use('/auth', authRouter);
appRouter.use('/cars', carsRouter);
appRouter.use('/car-owners', carOwnersRouter);
appRouter.use('/saved-cars', savedCarsRouter);
appRouter.use('/user-avatars', userAvatarsRouter);
appRouter.use('/users', usersRouter);

export default appRouter;
