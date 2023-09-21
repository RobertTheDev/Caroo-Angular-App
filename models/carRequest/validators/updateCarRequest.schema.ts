import { object, string, z } from 'zod';
import carRequestStatusValues from '../values/carRequestStatusValues';

// Zod validation schema defines fields required for updating a car request.
const updateCarRequestSchema = object({
  message: string({
    required_error: 'Request message is required.',
    invalid_type_error: 'Request message must be a string.',
  })
    .nonempty('Request message cannot be empty.')
    .nullable()
    .optional(),
  status: string({
    invalid_type_error: 'Car status must be a string.',
  })
    .nonempty('Car request status cannot be empty.')
    .refine((value) => carRequestStatusValues.includes(value), {
      message: 'The car request status is not a valid status.',
    })
    .optional(),
});

// Create a TypeScript type from the schema.
export type UpdateCarRequestSchemaType = z.infer<typeof updateCarRequestSchema>;

export default updateCarRequestSchema;
