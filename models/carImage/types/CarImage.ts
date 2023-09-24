export default interface ICarImage {
  id: string;
  createdAt: Date;
  updatedAt: Date | null;
  alt: string;
  carId: string;
  url: string | null;
}
