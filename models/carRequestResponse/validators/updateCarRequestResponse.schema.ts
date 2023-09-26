import { object, string, z } from 'zod';

// Zod validation schema defines fields required for updating a car request.
const updateCarRequestResponseSchema = object({
  message: string({
    required_error: 'Request message is required.',
    invalid_type_error: 'Request message must be a string.',
  })
    .nonempty('Request message cannot be empty.')
    .nullable()
    .optional(),
});

// Create a TypeScript type from the schema.
export type UpdateCarRequestResponseSchemaType = z.infer<
  typeof updateCarRequestResponseSchema
>;

export default updateCarRequestResponseSchema;
