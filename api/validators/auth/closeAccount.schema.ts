import * as z from 'zod';

// Close account schema is a validation schema defining the acceptable fields required.

const closeAccountSchema = z.object({
  password: z.string({
    required_error: 'Password is required.',
    invalid_type_error: 'Password must be a string.',
  }),
  close: z
    .string({
      required_error: 'Please type "CLOSE" to close the account.',
      invalid_type_error: 'Close must be a string.',
    })
    .refine((value) => value === 'CLOSE', {
      message: 'You must type "CLOSE"',
    }),
});

export type CloseAccountSchemaType = z.infer<typeof closeAccountSchema>;

export default closeAccountSchema;
