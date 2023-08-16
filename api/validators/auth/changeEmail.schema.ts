import * as z from 'zod';

const changeEmailSchema = z.object({
  newEmailAddress: z
    .string({
      required_error: 'Please provide a new email address.',
      invalid_type_error: 'Email address must be a string.',
    })
    .email('Email address must be a valid email format.'),
  password: z.string({
    required_error: 'Password is required.',
    invalid_type_error: 'Password must be a string.',
  }),
});

export type ChangeEmailSchemaType = z.infer<typeof changeEmailSchema>;

export default changeEmailSchema;
