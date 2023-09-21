import { object, string, z } from 'zod';

// Zod validation schema defines fields required for signing up a user.
const signUpSchema = object({
  emailAddress: string({
    required_error: 'Email address is required.',
    invalid_type_error: 'Email address must be a string.',
  })
    .email('Email address must be a valid email format.')
    .nonempty('Email address cannot be empty.'),
  firstName: string({
    required_error: 'First name is required.',
    invalid_type_error: 'First name must be a string.',
  }).nonempty('First name cannot be empty.'),
  lastName: string({
    required_error: 'Last name is required.',
    invalid_type_error: 'Last name must be a string.',
  }).nonempty('Last name cannot be empty.'),
  password: string({
    required_error: 'Password is required.',
    invalid_type_error: 'Password must be a string.',
  })
    .min(8, 'Password must be at least eight characters long.')
    .nonempty('Password cannot be empty.')
    .regex(/[A-Z]/, 'Password must contain at least one capital letter.')
    .regex(/[a-z]/, 'Password must contain at least one lowercase letter.')
    .regex(/\d/, 'Password must contain at least one number.')
    .regex(
      /[!@#$%^&*(),.?":{}|<>]/,
      'Password must contain at least one special character.',
    ),
});

// Create a TypeScript type from the schema.
export type SignUpSchemaType = z.infer<typeof signUpSchema>;

export default signUpSchema;
