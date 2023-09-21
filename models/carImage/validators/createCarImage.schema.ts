import { object, string, z } from 'zod';

// Zod validation schema defines fields required for creating a car image.
const createCarImageSchema = object({
  url: string({
    required_error: 'Please provide a Car image URL for the car image.',
    invalid_type_error: 'Car image URL must be a string.',
  })
    .url('Car image URL must be a valid URL format.')
    .nonempty('Car image URL cannot be empty.'),
  alt: string({
    required_error: 'Please provide alt text for the car image.',
    invalid_type_error: 'Alt text must be a string.',
  }).nonempty('Car image alt cannot be empty.'),
});

// Create a TypeScript type from the schema.
export type CreateCarImageSchemaType = z.infer<typeof createCarImageSchema>;

export default createCarImageSchema;
