import { object, string } from 'zod';

// Change email schema is a validation schema defining the acceptable fields required.

const changeEmailSchema = object({
  newEmailAddress: string({
    required_error: 'Please provide a new email address.',
    invalid_type_error: 'Email address must be a string.',
  }).email('Email address must be a valid email format.'),
  password: string({
    required_error: 'Password is required.',
    invalid_type_error: 'Password must be a string.',
  }),
});

export default changeEmailSchema;
