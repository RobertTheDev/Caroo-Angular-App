import * as express from 'express';
import usersRouter from './routes/users.route';
import userAvatarsRouter from './routes/userAvatars';
import savedCarsRouter from './routes/savedCars.route';
import carsRouter from './routes/cars.route';
import carOwnersRouter from './routes/carOwners.route';

const appRouter = express.Router();

appRouter.use('/car-owners', carOwnersRouter);
appRouter.use('/cars', carsRouter);
appRouter.use('/saved-cars', savedCarsRouter);
appRouter.use('/user-avatars', userAvatarsRouter);
appRouter.use('/users', usersRouter);

export default appRouter;
