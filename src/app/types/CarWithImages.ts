import { Car, CarImage } from '@prisma/client';

export default interface CarWithImage extends Car {
  images: CarImage[];
  owner: {
    id: string;
    email: string;
    firstName: string;
    lastName: string;
    avatarUrl: string;
  };
}
