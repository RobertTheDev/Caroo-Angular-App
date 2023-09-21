import { object, string, z } from 'zod';
import carRequestStatusValues from '../values/carRequestStatusValues';

// Zod validation schema defines fields required for creating a car request.
const createCarRequestSchema = object({
  carId: string({
    required_error: 'Car ID is required.',
    invalid_type_error: 'Car ID must be a string.',
  }).nonempty('Car ID cannot be empty.'),
  message: string({
    invalid_type_error: 'Request message must be a string.',
  })
    .nonempty('Request message cannot be empty.')
    .nullable()
    .optional(),
  status: string({
    required_error: 'Car request status is required.',
    invalid_type_error: 'Car status must be a string.',
  })
    .nonempty('Car request status cannot be empty.')
    .refine((value) => carRequestStatusValues.includes(value), {
      message: 'The car request status is not a valid status.',
    })
    .default('Requested'),
  userId: string({
    required_error: 'User ID is required.',
    invalid_type_error: 'User ID must be a string.',
  }).nonempty('User ID cannot be empty.'),
});

// Create a TypeScript type from the schema.
export type CreateCarRequestSchemaType = z.infer<typeof createCarRequestSchema>;

export default createCarRequestSchema;
