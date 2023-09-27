import { User } from '@prisma/client';
import { UpdateEmailSchemaType } from 'models/account/validators/updateEmail.schema';
import { SendEmailVerificationTokenSchemaType } from 'models/account/validators/sendEmailVerificationToken.schema';
import prisma from 'api/utils/prisma';
import AuthenticatedUser from 'models/auth/types/AuthenticatedUser';

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

// Closes and deletes a user account by email address.
export async function closeUserAccount(id: string): Promise<User> {
  return await prisma.user.delete({
    where: {
      id,
    },
  });
}

// Update a user by id.
export async function updateAccountEmailAddress(
  id: string,
  data: UpdateEmailSchemaType,
): Promise<AuthenticatedUser | null> {
  return await prisma.user.update({
    select: userReturnFields,
    where: {
      id,
    },
    data: {
      emailAddress: data.emailAddress,
      emailVerified: null,
    },
  });
}

// Update a user by id.
export async function updateAccountPassword(
  id: string,
  password: string,
): Promise<AuthenticatedUser | null> {
  return await prisma.user.update({
    select: userReturnFields,
    where: {
      id,
    },
    data: {
      password,
    },
  });
}

// Update user with email verification token.
export async function updateAccountWithEmailVerificationToken(
  id: string,
  data: SendEmailVerificationTokenSchemaType,
): Promise<AuthenticatedUser> {
  return await prisma.user.update({
    select: userReturnFields,
    data: {
      emailVerificationToken: data.emailVerificationToken,
      emailVerificationTokenExpiry: data.emailVerificationTokenExpiry,
    },
    where: {
      id,
    },
  });
}

// Verify user email address with email verification token.
export async function verifyAccountEmailAddressWithEmailVerificationToken(
  emailVerificationToken: string,
): Promise<AuthenticatedUser> {
  return await prisma.user.update({
    select: userReturnFields,
    data: {
      emailVerified: new Date(),
      emailVerificationToken: null,
      emailVerificationTokenExpiry: null,
    },
    where: {
      emailVerificationToken,
    },
  });
}

// Find a user by their email verification token.
export async function findAccountByEmailVerificationToken(
  emailVerificationToken: string,
): Promise<User | null> {
  return await prisma.user.findUnique({
    where: {
      emailVerificationToken,
    },
  });
}
