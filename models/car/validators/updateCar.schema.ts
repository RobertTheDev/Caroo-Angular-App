import { number, object, string, z } from 'zod';
import carColourValues from '../values/carColourValues';
import carGearboxValues from '../values/carGearboxValues';
import carFuelTypeValues from '../values/carFuelTypeValues';
import carDriveTypeValues from '../values/carDriveTypeValues';
import carEngineSizeValues from '../values/carEngineSizeValues';

// Zod validation schema defines fields required for updating a car.
const updateCarSchema = object({
  colour: string({
    invalid_type_error: 'Car colour must be a string.',
  })
    .nonempty('Car colour cannot be empty.')
    .refine((value) => carColourValues.includes(value), {
      message: `Car colour must be one of ${carColourValues}.`,
    }),
  doors: number({
    invalid_type_error: 'Car doors must be a string.',
  })
    .min(2, 'Car must have at least two doors.')
    .max(5, 'Car must have at least five doors.'),
  description: string({
    invalid_type_error: 'Car description must be a string.',
  })
    .nonempty('Car description cannot be empty.')
    .optional(),
  driveType: string({
    invalid_type_error: 'Car drive type must be a string.',
  })
    .nonempty('Car drive type cannot be empty.')
    .refine((value) => carDriveTypeValues.includes(value), {
      message: `Car drive type must be one of ${carDriveTypeValues}.`,
    }),
  engineSizeTotal: string({
    invalid_type_error: 'Car engine size must be a string.',
  })
    .nonempty('Car engine size cannot be empty.')
    .refine((value) => carEngineSizeValues.includes(value), {
      message: `Car engine size must be one of ${carEngineSizeValues}.`,
    }),
  fuelType: string({
    invalid_type_error: 'Car fuel type must be a string.',
  })
    .nonempty('Car fuel type cannot be empty.')
    .refine((value) => carFuelTypeValues.includes(value), {
      message: `Car fuel type must be one of ${carFuelTypeValues}.`,
    }),
  gearbox: string({
    invalid_type_error: 'Car gearbox must be a string.',
  })
    .nonempty('Car Gearbox cannot be empty.')
    .refine((value) => carGearboxValues.includes(value), {
      message: `Car gearbox must be one of ${carGearboxValues}.`,
    }),
  make: string({
    invalid_type_error: 'Car make must be a string.',
  }).nonempty('Car make cannot be empty.'),

  mileageTotal: number({
    invalid_type_error: 'Car mileage must be a number.',
  }).min(0, 'Mileage must be a positive number.'),
  model: string({
    invalid_type_error: 'Car model must be a string.',
  }).nonempty('Car model cannot be empty.'),
  ownerId: string({
    invalid_type_error: 'Car owner ID must be a string.',
  }).nonempty('Car owner ID cannot be empty.'),
  priceTotal: number({
    invalid_type_error: 'Car price must be a number.',
  }).min(0, 'Price must be a positive number.'),
  seats: number({
    invalid_type_error: 'Car seats must be a number.',
  })
    .min(2, 'Car must have at least two seats.')
    .max(8, 'Car must have at least eight seats.'),
  year: number({
    invalid_type_error: 'Car year must be a number.',
  }).refine((value) => value >= 2000 && value <= new Date().getFullYear(), {
    message: `Year must be a valid year between 2000 and ${new Date().getFullYear()}.`,
  }),
});

// Create a TypeScript type from the schema.
export type UpdateCarSchemaType = z.infer<typeof updateCarSchema>;

export default updateCarSchema;
