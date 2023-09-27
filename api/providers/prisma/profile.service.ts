import AuthenticatedUser from 'models/auth/types/AuthenticatedUser';
import { UpdateUserSchemaType } from 'models/user/validators/updateUser.schema';
import prisma from 'api/utils/prisma';

// Defines the fields the user data should return. Avoids displaying sensitive data.
const userReturnFields = {
  id: true,
  createdAt: true,
  updatedAt: true,
  avatar: true,
  emailAddress: true,
  emailVerified: true,
  firstName: true,
  lastName: true,
};

// Gets a user by id proivded from the session.
export async function getProfileById(
  id: string,
): Promise<AuthenticatedUser | null> {
  return await prisma.user.findUnique({
    select: userReturnFields,
    where: {
      id,
    },
  });
}

// Gets a user by id proivded from the session.
// Update a user by id.
export async function updateProfileById(
  data: UpdateUserSchemaType,
  id: string,
): Promise<AuthenticatedUser> {
  return await prisma.user.update({
    select: userReturnFields,
    where: {
      id,
    },
    data,
  });
}
