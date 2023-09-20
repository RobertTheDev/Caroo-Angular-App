import carColours from '../../../api/lib/constants/carColours';
import { number, object, string } from 'zod';

// Update car schema is a validation schema defining the acceptable fields required.

const updateCarSchema = object({
  make: string({
    invalid_type_error: 'Car make must be a string.',
  }).optional(),
  model: string({
    invalid_type_error: 'Car model must be a string.',
  }).optional(),
  colour: string({
    invalid_type_error: 'Colour must be a string.',
  })
    .optional()
    .refine((value) => value === undefined || carColours.includes(value), {
      message: 'Colour must be one of "blue", "red", "orange", or "green".',
    }),
  year: number({
    invalid_type_error: 'Year must be a number.',
  })
    .refine(
      (value) =>
        value === undefined ||
        (value >= 1950 && value <= new Date().getFullYear()),
      {
        message: `Year must be a valid year between 1950 and ${new Date().getFullYear()}.`,
      },
    )
    .optional(),
  ownerId: string({
    invalid_type_error: 'Owner ID must be a string.',
  }).optional(),
});

export default updateCarSchema;
