import { object, string, z } from 'zod';

// Zod validation schema defines fields required for resetting user's password with a token.
const verifyEmailWithToken = object({
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
  verifyEmailToken: string({
    required_error: 'Password reset token is required.',
    invalid_type_error: 'Password reset token must be a string.',
  }).nonempty('Password reset token cannot be empty.'),
});

// Create a TypeScript type from the schema.
export type VerifyEmailWithTokenType = z.infer<typeof verifyEmailWithToken>;

export default verifyEmailWithToken;
