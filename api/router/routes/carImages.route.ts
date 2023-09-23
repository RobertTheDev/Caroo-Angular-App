import createCarImages from 'api/controllers/carImage/createCarImages';
import deleteCarImageById from 'api/controllers/carImage/deleteCarImageById';
import deleteCarImagesByCarId from 'api/controllers/carImage/deleteCarImagesByCarId';
import deleteCarImages from 'api/controllers/carImage/deleteCarsImages';
import getCarImageById from 'api/controllers/carImage/getCarImageById';
import getCarImagesByCarId from 'api/controllers/carImage/getCarImagesByCarId';
import updateCarImageById from 'api/controllers/carImage/updateCarImageById';
import isAuthenticated from 'api/middlewares/auth/isAuthenticated';
import { Router } from 'express';

// Car images router defines all the routes used in modifying car images data.
// Car images router is exported into the app router file.

// Define car images router using the express router.
const carImagesRouter = Router();

carImagesRouter.delete('/', isAuthenticated, deleteCarImages);

carImagesRouter.delete('/:id', isAuthenticated, deleteCarImageById);

carImagesRouter.delete('/car/:carId', isAuthenticated, deleteCarImagesByCarId);

carImagesRouter.get('/:id', getCarImageById);

carImagesRouter.get('/car/:carId', getCarImagesByCarId);

carImagesRouter.post('/create', isAuthenticated, createCarImages);

carImagesRouter.put('/:id', isAuthenticated, updateCarImageById);

export default carImagesRouter;
