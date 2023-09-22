import { object, string, z } from 'zod';
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
  passwordResetTokenExpiry: string().default(() => {
    const currentTime = new Date();
    currentTime.setMinutes(currentTime.getMinutes() + 10);
    return currentTime.toISOString();
  }),
});

// Create a TypeScript type from the schema.
export type SendPasswordResetTokenSchemaType = z.infer<
  typeof sendPasswordResetTokenSchema
>;

export default sendPasswordResetTokenSchema;
