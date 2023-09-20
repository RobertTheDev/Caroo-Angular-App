import { object, string } from 'zod';

// Login schema is a validation schema defining the acceptable fields required.

const loginSchema = object({
  email: string({
    required_error: 'Email address is required.',
    invalid_type_error: 'Email address must be a string.',
  }).email('Email address must be a valid email format.'),
  password: string({
    required_error: 'Password is required.',
    invalid_type_error: 'Password must be a string.',
  }),
});

export default loginSchema;
