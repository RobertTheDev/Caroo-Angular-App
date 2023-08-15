import * as express from 'express';
import helloRouter from './routes/hello.route';

const appRouter = express.Router();

appRouter.use('/hello', helloRouter);

export default appRouter;
