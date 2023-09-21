import { object, string, z } from 'zod';

// Zod validation schema defines fields required for updating a car image.
const updateCarImageSchema = object({
  url: string({
    invalid_type_error: 'Car image URL must be a string.',
  })
    .url('Car image URL must be in valid URL format.')
    .nonempty('Car image URL cannot be empty.')
    .optional(),
  alt: string({
    invalid_type_error: 'Alt text must be a string.',
  })
    .nonempty('Car image alt cannot be empty.')
    .optional(),
});

// Create a TypeScript type from the schema.
export type UpdateCarImageSchemaType = z.infer<typeof updateCarImageSchema>;

export default updateCarImageSchema;
