import { object, string, z } from 'zod';

// Zod validation schema defines fields required for sending a password reset email.
const verifyEmailWithTokenSchema = object({
  verifyEmailToken: string({
    required_error: 'Password reset token is required.',
    invalid_type_error: 'Password reset token must be a string.',
  }).nonempty('Password reset token cannot be empty.'),
});

// Create a TypeScript type from the schema.
export type VerifyEmailWithTokenSchemaType = z.infer<
  typeof verifyEmailWithTokenSchema
>;

export default verifyEmailWithTokenSchema;
