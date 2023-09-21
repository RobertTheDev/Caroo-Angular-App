import { object, string, z } from 'zod';

// Zod validation schema defines fields required for updating a user.
const updateUserSchema = object({
  avatar: string({
    invalid_type_error: 'First name must be a string.',
  })
    .url('Avatar must be in valid URL format.')
    .nonempty('Avatar cannot be empty.')
    .nullable()
    .optional(),
  firstName: string({
    invalid_type_error: 'First name must be a string.',
  })
    .nonempty('First name cannot be empty.')
    .optional(),
  lastName: string({
    invalid_type_error: 'Last name must be a string.',
  })
    .nonempty('Last name cannot be empty.')
    .optional(),
});

// Create a TypeScript type from the schema.
export type UpdateUserSchemaType = z.infer<typeof updateUserSchema>;

export default updateUserSchema;
