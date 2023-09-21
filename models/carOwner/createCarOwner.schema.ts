import { object, string, z } from 'zod';

// Zod validation schema defines fields required for creating a car owner.
const createCarOwnerSchema = object({
  userId: string({
    required_error: 'User ID is required.',
    invalid_type_error: 'User ID must be a string.',
  }).nonempty('User ID cannot be empty.'),
  carId: string({
    required_error: 'Car ID is required.',
    invalid_type_error: 'Car ID must be a string.',
  }).nonempty('Car ID cannot be empty.'),
});

// Create a TypeScript type from the schema.
export type CreateCarOwnerSchemaType = z.infer<typeof createCarOwnerSchema>;

export default createCarOwnerSchema;
