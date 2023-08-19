import * as z from 'zod';

// Create avatar schema is a validation schema defining the acceptable fields required.

const createUserAvatarSchema = z.object({
  url: z
    .string({
      required_error: 'Please provide a URL for the avatar image.',
      invalid_type_error: 'URL must be a string.',
    })
    .url('URL must be a valid URL format.'),
  alt: z.string({
    required_error: 'Please provide alt text for the avatar image.',
    invalid_type_error: 'Alt text must be a string.',
  }),
  userId: z.string({
    required_error: 'Please provide a user id.',
    invalid_type_error: 'User id must be a string.',
  }),
});

export type CreateUserAvatarSchemaType = z.infer<typeof createUserAvatarSchema>;

export default createUserAvatarSchema;
