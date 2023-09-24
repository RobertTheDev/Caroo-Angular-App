import ICar from 'models/car/types/Car';
import ICarRequest from 'models/carRequest/types/CarRequest';
import ISavedCar from 'models/savedCar/types/SavedCar';

export default interface IUser {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  avatar: string | null;
  carRequests?: ICarRequest[];
  emailAddress: string;
  emailVerified: Date | null;
  firstName: string;
  lastName: string;
  ownedCars?: ICar[];
  password: string;
  passwordResetToken: string | null;
  passwordResetTokenExpiry: Date | null;
  emailVerificationToken: string | null;
  emailVerificationTokenExpiry: Date | null;
  savedCars?: ISavedCar[];
}
