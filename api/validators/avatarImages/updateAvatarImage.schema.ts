import * as z from 'zod';

// Update avatar schema is a validation schema defining the acceptable fields required.

const updateAvatarImageSchema = z.object({
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
});

export type updateAvatarImageSchemaType = z.infer<
  typeof updateAvatarImageSchema
>;

export default updateAvatarImageSchema;
