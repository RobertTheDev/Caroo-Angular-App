import { CarRequest } from '@prisma/client';
import ICarImage from 'models/carImage/types/CarImage';
import ISavedCar from 'models/savedCar/types/SavedCar';
import IUser from 'models/user/types/User';

export default interface ICar {
  id: string;
  createdAt: Date;
  updatedAt: Date | null;
  carRequests?: CarRequest[];
  colour: string;
  description: string | null;
  doors: number;
  driveType: string;
  engineSize: string;
  fuelType: string;
  gearbox: string;
  images?: ICarImage[];
  make: string;
  mileageTotal: number;
  mileageUnit: string;
  model: string;
  owner?: IUser;
  ownerId: string | null;
  priceCurrency: string;
  priceTotal: number;
  seats: number;
  status: string;
  usersSaved?: ISavedCar[];
  year: number;
}
