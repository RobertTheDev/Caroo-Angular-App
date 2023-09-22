import { object, string, z } from 'zod';

// Zod validation schema defines fields required for changing a password.
const changePasswordSchema = object({
  currentPassword: string({
    required_error: 'Current password is required.',
    invalid_type_error: 'Current password must be a string.',
  }).nonempty('Curent password cannot be empty.'),
  newPassword: string({
    required_error: 'New password is required.',
    invalid_type_error: 'New password must be a string.',
  })
    .min(8, 'Password must be at least eight characters long.')
    .nonempty('New password cannot be empty.')
    .regex(/[A-Z]/, 'Password must contain at least one capital letter.')
    .regex(/[a-z]/, 'Password must contain at least one lowercase letter.')
    .regex(/\d/, 'Password must contain at least one number.')
    .regex(
      /[!@#$%^&*(),.?":{}|<>]/,
      'Password must contain at least one special character',
    ),
}).refine((data) => data.newPassword !== data.currentPassword, {
  message: 'New password must be different from the current password',
  path: ['newPassword'],
});

// Create a TypeScript type from the schema.
export type ChangePasswordSchemaType = z.infer<typeof changePasswordSchema>;

export default changePasswordSchema;
