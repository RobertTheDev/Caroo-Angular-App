import { number, object, string, z } from 'zod';
import { v4 as uuidv4 } from 'uuid';
// Zod validation schema defines fields required for sending a password reset email.
const sendPasswordResetTokenSchema = object({
  emailAddress: string({
    required_error: 'Email address is required.',
    invalid_type_error: 'Email address must be a string.',
  })
    .email('Email address must be a valid email format.')
    .nonempty('Email address cannot be empty.'),
  passwordResetToken: string().default(() => uuidv4()),
  passwordResetTokenExpiry: number().default(() => {
    // Set the expiry time to 10 minutes from the current time
    const currentTimeInMS = new Date().getTime();
    return currentTimeInMS + 10 * 60 * 1000;
  }),
});

// Create a TypeScript type from the schema.
export type SendPasswordResetTokenSchemaType = z.infer<
  typeof sendPasswordResetTokenSchema
>;

export default sendPasswordResetTokenSchema;
