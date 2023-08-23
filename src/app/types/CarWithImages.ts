import { Car, CarImage } from '@prisma/client';

export default interface CarWithImage extends Car {
  images: CarImage[];
}
