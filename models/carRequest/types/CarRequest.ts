import ICar from 'models/car/types/Car';
import IUser from 'models/user/types/User';

export default interface ICarRequest {
  id: string;
  createdAt: Date;
  updatedAt: Date | null;
  car?: ICar;
  carId: string;
  message: string | null;
  status: string;
  user?: IUser;
  userId: string;
}
