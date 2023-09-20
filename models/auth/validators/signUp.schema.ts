import { object, string } from 'zod';

// Sign up schema is a validation schema defining the acceptable fields required.

const signUpSchema = object({
  email: string({
    required_error: 'Email address is required.',
    invalid_type_error: 'Email address must be a string.',
  }).email('Email address must be a valid email format.'),

  firstName: string({
    required_error: 'First name is required.',
    invalid_type_error: 'First name must be a string.',
  }),
  lastName: string({
    required_error: 'Last name is required.',
    invalid_type_error: 'Last name must be a string.',
  }),
  password: string({
    required_error: 'Password is required.',
    invalid_type_error: 'Password must be a string.',
  })
    .min(8, 'Password must be at least 8 characters long')
    .regex(/[A-Z]/, 'Password must contain at least one capital letter')
    .regex(/[a-z]/, 'Password must contain at least one lowercase letter')
    .regex(/\d/, 'Password must contain at least one number')
    .regex(
      /[!@#$%^&*(),.?":{}|<>]/,
      'Password must contain at least one special character',
    ),
});

export default signUpSchema;
