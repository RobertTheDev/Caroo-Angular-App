import AuthenticatedUser from 'models/auth/types/AuthenticatedUser';
import { ResetPasswordWithTokenSchemaType } from 'models/auth/validators/resetPasswordWithToken.schema';
import { SendPasswordResetTokenSchemaType } from 'models/auth/validators/sendPasswordResetToken.schema';
import { SignUpSchemaType } from 'models/auth/validators/signUp.schema';
import prisma from 'api/utils/prisma';

// Defines the fields the user data should return. Avoids displaying sensitive data.
export const userReturnFields = {
  id: true,
  createdAt: true,
  updatedAt: true,
  avatar: true,
  emailAddress: true,
  emailVerified: true,
  firstName: true,
  lastName: true,
};

// Signs up a user.
export async function authSignUp(
  data: SignUpSchemaType,
): Promise<AuthenticatedUser> {
  return await prisma.user.create({
    select: userReturnFields,
    data,
  });
}

// Login a user by finding user with email address.
export async function authLogin(
  emailAddress: string,
): Promise<AuthenticatedUser | null> {
  return await prisma.user.findUnique({
    select: userReturnFields,
    where: {
      emailAddress,
    },
  });
}

// Insert the password reset token and expiry into user after sending password reset.
export async function authSendPasswordResetByEmailAddress(
  emailAddress: string,
  data: SendPasswordResetTokenSchemaType,
): Promise<AuthenticatedUser> {
  return await prisma.user.update({
    data,
    select: userReturnFields,
    where: {
      emailAddress,
    },
  });
}

// Reset the user's password using the password reset token.
export async function authResetPasswordWithToken(
  passwordResetToken: string,
  data: ResetPasswordWithTokenSchemaType,
): Promise<AuthenticatedUser> {
  return await prisma.user.update({
    data: {
      password: data.password,
      passwordResetToken: null,
      passwordResetTokenExpiry: null,
    },
    select: userReturnFields,
    where: {
      passwordResetToken,
    },
  });
}

// Get the authenticated user by id.
export async function authGetAuthenticatedUserById(
  id: string,
): Promise<AuthenticatedUser | null> {
  return await prisma.user.findUnique({
    select: userReturnFields,
    where: {
      id,
    },
  });
}
