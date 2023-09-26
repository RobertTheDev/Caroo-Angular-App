import { object, string, z } from 'zod';

// Zod validation schema defines fields required for sending a password reset email.
const verifyEmailWithTokenSchema = object({
  emailVerificationToken: string({
    required_error: 'Email verification token is required.',
    invalid_type_error: 'Email verification token must be a string.',
  }).nonempty('Email verification token cannot be empty.'),
});

// Create a TypeScript type from the schema.
export type VerifyEmailWithTokenSchemaType = z.infer<
  typeof verifyEmailWithTokenSchema
>;

export default verifyEmailWithTokenSchema;
