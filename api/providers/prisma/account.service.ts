import { User } from '@prisma/client';
import { UpdateEmailSchemaType } from 'models/account/validators/updateEmail.schema';
import { SendEmailVerificationTokenSchemaType } from 'models/account/validators/sendEmailVerificationToken.schema';
import prisma from 'api/utils/prisma';

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
): Promise<User | null> {
  return await prisma.user.update({
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
): Promise<User | null> {
  return await prisma.user.update({
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
): Promise<User> {
  return await prisma.user.update({
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
): Promise<User> {
  return await prisma.user.update({
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
