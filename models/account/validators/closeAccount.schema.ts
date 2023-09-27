import { object, string, z } from 'zod';

// Zod validation schema defines fields required for closing an account.
const closeAccountSchema = object({
  password: string({
    required_error: 'Password is required.',
    invalid_type_error: 'Password must be a string.',
  }).nonempty('Password cannot be empty.'),
  close: string({
    required_error: 'Please type CLOSE to close the account.',
    invalid_type_error: 'Close must be a string.',
  })
    .nonempty('Please type CLOSE to close the account.')
    .refine((value) => value === 'CLOSE', {
      message: 'Please type CLOSE to close the account.',
    }),
});

// Create a TypeScript type from the schema.
export type CloseAccountSchemaType = z.infer<typeof closeAccountSchema>;

export default closeAccountSchema;
