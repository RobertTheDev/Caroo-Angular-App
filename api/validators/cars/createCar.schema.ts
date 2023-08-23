import carColours from '../../lib/constants/carColours';
import * as z from 'zod';

// Create car schema is a validation schema defining the acceptable fields required.

const createCarSchema = z.object({
  description: z
    .string({
      required_error:
        'A car description is required. Please provide a car description.',
      invalid_type_error: 'Car description must be a string.',
    })
    .optional(),
  doors: z.number({
    required_error: 'A car price is required. Please provide a car price.',
    invalid_type_error: 'Car price must be a string.',
  }),
  engineSizeTotal: z.number({
    required_error: 'A car price is required. Please provide a car price.',
    invalid_type_error: 'Car price must be a string.',
  }),
  seats: z.number({
    required_error: 'A car price is required. Please provide a car price.',
    invalid_type_error: 'Car price must be a string.',
  }),
  mileageTotal: z.number({
    required_error: 'A car price is required. Please provide a car price.',
    invalid_type_error: 'Car price must be a string.',
  }),
  priceTotal: z.number({
    required_error: 'A car price is required. Please provide a car price.',
    invalid_type_error: 'Car price must be a string.',
  }),
  driveType: z.string({
    required_error:
      'A car drive type is required. Please provide a car drive type.',
    invalid_type_error: 'Car drive type must be a string.',
  }),
  fuelType: z.string({
    required_error:
      'A car fuel type is required. Please provide a car fuel type.',
    invalid_type_error: 'Car fuel type must be a string.',
  }),
  gearbox: z.string({
    required_error: 'A car gearbox is required. Please provide a car gearbox.',
    invalid_type_error: 'Car gearbox must be a string.',
  }),
  make: z.string({
    required_error: 'A car make is required. Please provide a car make.',
    invalid_type_error: 'Car make must be a string.',
  }),
  model: z.string({
    required_error: 'A car model is required. Please provide a car model.',
    invalid_type_error: 'Car model must be a string.',
  }),
  colour: z
    .string({
      required_error:
        'A colour for the car is required. Please provide a colour.',
      invalid_type_error: 'Colour must be a string.',
    })
    .refine((value) => carColours.includes(value), {
      message: 'Colour must be one of "blue", "red", "orange", or "green".',
    }),
  year: z
    .number({
      required_error: 'A year for the car is required. Please provide a year.',
      invalid_type_error: 'Year must be a number.',
    })
    .refine((value) => value >= 1950 && value <= new Date().getFullYear(), {
      message: `Year must be a valid year between 1950 and ${new Date().getFullYear()}.`,
    }),
  ownerId: z.string({
    required_error: 'An owner ID is required. Please provide an owner ID.',
    invalid_type_error: 'Owner ID be a string.',
  }),
});

export type CreateCarSchemaType = z.infer<typeof createCarSchema>;

export default createCarSchema;
