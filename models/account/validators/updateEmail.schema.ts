import { object, string, z } from 'zod';

// Zod validation schema defines fields required for changing a user's email.
const updateEmailSchema = object({
  emailAddress: string({
    required_error: 'Please provide a new email address.',
    invalid_type_error: 'Email address must be a string.',
  })
    .email('Email address must be in valid email format.')
    .nonempty('Email address cannot be empty.'),
  password: string({
    required_error: 'Password is required.',
    invalid_type_error: 'Password must be a string.',
  }).nonempty('Password cannot be empty.'),
});

// Create a TypeScript type from the schema.
export type UpdateEmailSchemaType = z.infer<typeof updateEmailSchema>;

export default updateEmailSchema;
