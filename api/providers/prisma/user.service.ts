import { Prisma, User } from '@prisma/client';
import { UpdateUserSchemaType } from 'models/user/validators/updateUser.schema';
import { SignUpSchemaType } from 'models/auth/validators/signUp.schema';
import { SendPasswordResetTokenSchemaType } from 'models/auth/validators/sendPasswordResetToken.schema';
import { ResetPasswordWithTokenSchemaType } from 'models/auth/validators/resetPasswordWithToken.schema';
import prisma from 'api/utils/prisma';

// Creates a user during sign up.
export async function createUser(data: SignUpSchemaType): Promise<User> {
  return await prisma.user.create({
    data,
  });
}

// Delete all users.
export async function deleteAllUsers(): Promise<Prisma.BatchPayload> {
  return await prisma.user.deleteMany();
}

// Update and return a user by id.
export async function deleteUserById(id: string): Promise<User> {
  return await prisma.user.delete({
    where: {
      id,
    },
  });
}

// Return all users.
export async function findAllUsers(): Promise<User[]> {
  return await prisma.user.findMany();
}

// Find and return a user by email address.
export async function findUserByEmailAddress(
  emailAddress: string,
): Promise<User | null> {
  return await prisma.user.findUnique({
    where: {
      emailAddress,
    },
  });
}

// Find and return a user by id.
export async function findUserById(id: string): Promise<User | null> {
  return await prisma.user.findUnique({
    where: {
      id,
    },
  });
}

// Update and return a user by id.
export async function updateOneUserById(
  data: UpdateUserSchemaType,
  id: string,
): Promise<User> {
  return await prisma.user.update({
    data,
    where: {
      id,
    },
  });
}

// Update user with reset password token by email address.
export async function updateUserWithResetPasswordToken(
  data: SendPasswordResetTokenSchemaType,
): Promise<User> {
  return await prisma.user.update({
    data,
    where: {
      emailAddress: data.emailAddress,
    },
  });
}

// Update user with reset password token by email address.
export async function updateUserPasswordWithResetPasswordToken(
  passwordResetToken: string,
  data: ResetPasswordWithTokenSchemaType,
): Promise<User> {
  return await prisma.user.update({
    data: {
      password: data.password,
      passwordResetToken: null,
      passwordResetTokenExpiry: null,
    },
    where: {
      passwordResetToken,
    },
  });
}

// Find a user by their reset password token.
export async function findUserByResetPasswordToken(
  passwordResetToken: string,
): Promise<User | null> {
  return await prisma.user.findUnique({
    where: {
      passwordResetToken,
    },
  });
}
