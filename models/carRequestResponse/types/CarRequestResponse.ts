import ICarRequest from 'models/carRequest/types/CarRequest';
import IUser from 'models/user/types/User';

export default interface ICarRequestResponse {
  id: string;
  createdAt: Date;
  updatedAt: Date | null;
  carRequest?: ICarRequest;
  carRequestId: string;
  message: string | null;
  status: string;
  user?: IUser;
  userId: string;
}
