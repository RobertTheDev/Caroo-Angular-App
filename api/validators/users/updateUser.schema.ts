import * as z from 'zod';

// Update user schema is a validation schema defining the acceptable fields required.

const updateUserSchema = z.object({
  firstName: z
    .string({
      invalid_type_error: 'First name must be a string.',
    })
    .optional(),
  lastName: z
    .string({
      invalid_type_error: 'Last name must be a string.',
    })
    .optional(),
  companiesFollowed: z
    .number({
      invalid_type_error: 'Companies followed must be a number.',
    })
    .optional(),
  carsOwned: z
    .number({
      invalid_type_error: 'Cars owned must be a number.',
    })
    .optional(),
  carSaved: z
    .number({
      invalid_type_error: 'Cars saved must be a number.',
    })
    .optional(),
});

export type UpdateUserSchemaType = z.infer<typeof updateUserSchema>;

export default updateUserSchema;
