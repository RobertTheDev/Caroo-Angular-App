import { Router } from 'express';
import usersRouter from './routes/users.route';
import savedCarsRouter from './routes/savedCars.route';
import carsRouter from './routes/cars.route';
import authRouter from './routes/auth.route';
import accountRouter from './routes/account.route';
import carImagesRouter from './routes/carImages.route';
import carRequestsRouter from './routes/carRequests.route';
import profileRouter from './routes/profile.route';
import carRequestResponsesRouter from './routes/carRequestResponses.route';

// App router defines all the routes used in the application.
// App router is exported into the main server file.

const appRouter = Router();

appRouter.use('/account', accountRouter);
appRouter.use('/auth', authRouter);
appRouter.use('/car-images', carImagesRouter);
appRouter.use('/car-requests', carRequestsRouter);
appRouter.use('/car-request-responses', carRequestResponsesRouter);
appRouter.use('/cars', carsRouter);
appRouter.use('/profile', profileRouter);
appRouter.use('/saved-cars', savedCarsRouter);
appRouter.use('/users', usersRouter);

export default appRouter;
