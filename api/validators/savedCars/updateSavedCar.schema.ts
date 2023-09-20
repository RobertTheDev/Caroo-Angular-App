import { object, string } from 'zod';

// Update saved car schema is a validation schema defining the acceptable fields required.

const updateSavedCarSchema = object({
  carId: string({
    required_error: 'A car ID is required. Please provide a car ID.',
    invalid_type_error: 'Car ID be a string.',
  }),
  userId: string({
    required_error: 'A user ID is required. Please provide a user ID.',
    invalid_type_error: 'User ID be a string.',
  }),
});

export default updateSavedCarSchema;
