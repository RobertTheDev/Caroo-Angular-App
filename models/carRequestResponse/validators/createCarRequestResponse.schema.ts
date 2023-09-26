import { object, string, z } from 'zod';

// Zod validation schema defines fields required for creating a car request.
const createCarRequestResponseSchema = object({
  carRequestId: string({
    required_error: 'Car response ID is required.',
    invalid_type_error: 'Car response ID must be a string.',
  }).nonempty('Car response ID cannot be empty.'),
  message: string({
    invalid_type_error: 'Request message must be a string.',
  })
    .nonempty('Request message cannot be empty.')
    .nullable()
    .optional(),

  userId: string({
    required_error: 'User ID is required.',
    invalid_type_error: 'User ID must be a string.',
  }).nonempty('User ID cannot be empty.'),
});

// Create a TypeScript type from the schema.
export type CreateCarRequestResponseSchemaType = z.infer<
  typeof createCarRequestResponseSchema
>;

export default createCarRequestResponseSchema;
