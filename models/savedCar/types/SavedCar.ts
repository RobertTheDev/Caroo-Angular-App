import ICar from 'models/car/types/Car';
import IUser from 'models/user/types/User';

export default interface ISavedCar {
  id: string;
  createdAt: Date;
  updatedAt: Date | null;
  car?: ICar;
  carId: string;
  user?: IUser;
  userId: string;
}
