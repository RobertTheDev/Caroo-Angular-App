import * as z from 'zod';

// Create car image schema is a validation schema defining the acceptable fields required.

const createCarImageSchema = z.object({
  url: z
    .string({
      required_error: 'Please provide a URL for the car image.',
      invalid_type_error: 'URL must be a string.',
    })
    .url('URL must be a valid URL format.'),
  alt: z.string({
    required_error: 'Please provide alt text for the car image.',
    invalid_type_error: 'Alt text must be a string.',
  }),
});

export type CreateCarImageSchemaType = z.infer<typeof createCarImageSchema>;

export default createCarImageSchema;
