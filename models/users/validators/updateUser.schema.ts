import { number, object, string } from 'zod';

// Update user schema is a validation schema defining the acceptable fields required.

const updateUserSchema = object({
  firstName: string({
    invalid_type_error: 'First name must be a string.',
  }),

  lastName: string({
    invalid_type_error: 'Last name must be a string.',
  }),

  companiesFollowed: number({
    invalid_type_error: 'Companies followed must be a number.',
  }),

  carsOwned: number({
    invalid_type_error: 'Cars owned must be a number.',
  }),

  carSaved: number({
    invalid_type_error: 'Cars saved must be a number.',
  }),
});

export default updateUserSchema;
