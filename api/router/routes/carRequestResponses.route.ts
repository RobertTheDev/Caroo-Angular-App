// Car request responses router defines all the routes used in modifying car request responses data.
// Car request responses router is exported into the app router file.

import createCarRequestResponse from 'api/controllers/carRequestResponse/createCarRequestResponse';
import deleteCarRequestResponseById from 'api/controllers/carRequestResponse/deleteCarRequestResponseById';
import deleteCarRequestResponsesByUserId from 'api/controllers/carRequestResponse/deleteCarRequestResponsesByUserId';
import getCarRequestResponseById from 'api/controllers/carRequestResponse/getCarRequestResponseById';
import getCarRequestResponses from 'api/controllers/carRequestResponse/getCarRequestResponses';
import getCarRequestResponsesByCarRequestId from 'api/controllers/carRequestResponse/getCarRequestResponsesByCarRequestId';
import getCarRequestResponsesByUserId from 'api/controllers/carRequestResponse/getCarRequestResponsesByUserId';
import updateCarRequestResponseById from 'api/controllers/carRequestResponse/updateCarRequestResponseById';
import isAuthenticated from 'api/middlewares/auth/isAuthenticated';
import { Router } from 'express';

// Define car request responses router using the express router.
const carRequestResponsesRouter = Router();

carRequestResponsesRouter.delete('/', isAuthenticated);

carRequestResponsesRouter.delete(
  '/:id',
  isAuthenticated,
  deleteCarRequestResponseById,
);

carRequestResponsesRouter.delete(
  '/user/:userId',
  isAuthenticated,
  deleteCarRequestResponsesByUserId,
);

carRequestResponsesRouter.get('/', getCarRequestResponses);

carRequestResponsesRouter.get('/:id', getCarRequestResponseById);

carRequestResponsesRouter.get('/user/:userId', getCarRequestResponsesByUserId);

carRequestResponsesRouter.get(
  '/car-request/:carResquestId',
  getCarRequestResponsesByCarRequestId,
);

carRequestResponsesRouter.post(
  '/:carRequestId',
  isAuthenticated,
  createCarRequestResponse,
);

carRequestResponsesRouter.put(
  '/:id',
  isAuthenticated,
  updateCarRequestResponseById,
);

export default carRequestResponsesRouter;
