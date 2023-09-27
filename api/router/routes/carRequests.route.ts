import createCarRequest from 'api/controllers/carRequest/createCarRequest';
import deleteCarRequestById from 'api/controllers/carRequest/deleteCarRequestById';
import deleteCarRequestsByUserId from 'api/controllers/carRequest/deleteCarRequestsByUserId';
import getCarRequestById from 'api/controllers/carRequest/getCarRequestById';
import getCarRequests from 'api/controllers/carRequest/getCarRequests';
import getCarRequestsByCarId from 'api/controllers/carRequest/getCarRequestsByCarId';
import getCarRequestsByUserId from 'api/controllers/carRequest/getCarRequestsByUserId';
import updateCarRequestById from 'api/controllers/carRequest/updateCarRequestById';
import isAuthenticated from 'api/middlewares/auth/isAuthenticated';
import { Router } from 'express';

// Car requests router defines all the routes used in modifying car requests data.
// Car requests router is exported into the app router file.

// Define car requests router using the express router.
const carRequestsRouter = Router();

carRequestsRouter.delete('/:id', isAuthenticated, deleteCarRequestById);

carRequestsRouter.delete(
  '/user/:userId',
  isAuthenticated,
  deleteCarRequestsByUserId,
);

carRequestsRouter.get('/', getCarRequests);

carRequestsRouter.get('/:id', getCarRequestById);

carRequestsRouter.get('/user/:userId', getCarRequestsByUserId);

carRequestsRouter.get('/car/:carId', getCarRequestsByCarId);

carRequestsRouter.post('/:carId', isAuthenticated, createCarRequest);

carRequestsRouter.put('/:id', isAuthenticated, updateCarRequestById);

export default carRequestsRouter;
