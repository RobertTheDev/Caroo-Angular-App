import { object, string, z } from 'zod';

// Zod validation schema defines fields required for updating a user.
const validEmailSchema = object({
  emailAddress: string({
    required_error: 'Email address is required',
    invalid_type_error: 'Email address must be a string.',
  })
    .email('Email address must be in valid email format.')
    .nonempty('Email address cannot be empty.'),
});

// Create a TypeScript type from the schema.
export type ValidEmailSchemaType = z.infer<typeof validEmailSchema>;

export default validEmailSchema;
