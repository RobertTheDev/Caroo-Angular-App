import { object, string } from 'zod';

// Change password schema is a validation schema defining the acceptable fields required.

const changePasswordSchema = object({
  currentPassword: string().nonempty('Password is required.'),
  newPassword: string()
    .min(8, 'Password must be at least 8 characters long')
    .regex(/[A-Z]/, 'Password must contain at least one capital letter')
    .regex(/[a-z]/, 'Password must contain at least one lowercase letter')
    .regex(/\d/, 'Password must contain at least one number')
    .regex(
      /[!@#$%^&*(),.?":{}|<>]/,
      'Password must contain at least one special character',
    ),
}).refine((data) => data.newPassword !== data.currentPassword, {
  message: 'New password must be different from the current password',
  path: ['newPassword'],
});

export default changePasswordSchema;
