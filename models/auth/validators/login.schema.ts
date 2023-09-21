import { object, string, z } from 'zod';

// Zod validation schema defines fields required for logging in a user.
const loginSchema = object({
  emailAddress: string({
    required_error: 'Email address is required.',
    invalid_type_error: 'Email address must be a string.',
  })
    .email('Email address must be a valid email format.')
    .nonempty('Email address cannot be empty.'),
  password: string({
    required_error: 'Password is required.',
    invalid_type_error: 'Password must be a string.',
  }).nonempty('Password cannot be empty.'),
});

// Create a TypeScript type from the schema.
export type LoginSchemaType = z.infer<typeof loginSchema>;

export default loginSchema;
