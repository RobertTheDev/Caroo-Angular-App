import { object, string, z } from 'zod';

// Zod validation schema defines fields required for sending a password reset email.
const sendPasswordResetTokenSchema = object({
  emailAddress: string({
    required_error: 'Email address is required.',
    invalid_type_error: 'Email address must be a string.',
  })
    .email('Email address must be a valid email format.')
    .nonempty('Email address cannot be empty.'),
});

// Create a TypeScript type from the schema.
export type SendPasswordResetTokenSchemaType = z.infer<
  typeof sendPasswordResetTokenSchema
>;

export default sendPasswordResetTokenSchema;
