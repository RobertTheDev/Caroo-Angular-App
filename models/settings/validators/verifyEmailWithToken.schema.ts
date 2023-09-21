import { object, string, z } from 'zod';

// Zod validation schema defines fields required for verifying an email with token.
const verifyEmailWithTokenSchema = object({
  verifyEmailToken: string({
    required_error: 'Verify email token is required.',
    invalid_type_error: 'Verify email token must be a string.',
  }).nonempty('Verify email token cannot be empty.'),
});

// Create a TypeScript type from the schema.
export type VerifyEmailWithTokenSchemaType = z.infer<
  typeof verifyEmailWithTokenSchema
>;

export default verifyEmailWithTokenSchema;
