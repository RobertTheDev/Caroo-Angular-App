import { object, string } from 'zod';

// Close account schema is a validation schema defining the acceptable fields required.

const closeAccountSchema = object({
  password: string({
    required_error: 'Password is required.',
    invalid_type_error: 'Password must be a string.',
  }),
  close: string({
    required_error: 'Please type "CLOSE" to close the account.',
    invalid_type_error: 'Close must be a string.',
  }).refine((value) => value === 'CLOSE', {
    message: 'You must type "CLOSE"',
  }),
});

export default closeAccountSchema;
