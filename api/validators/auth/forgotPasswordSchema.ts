import * as z from 'zod';

const forgotPasswordSchema = z.object({
  email: z
    .string({
      required_error: 'Email address is required.',
      invalid_type_error: 'Email address must be a string.',
    })
    .email('Email address must be a valid email format.'),
});

export type ForgotPasswordSchemaType = z.infer<typeof forgotPasswordSchema>;

export default forgotPasswordSchema;
