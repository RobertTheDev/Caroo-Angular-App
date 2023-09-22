import { PrismaClient, User } from '@prisma/client';
import { SendEmailVerificationTokenSchemaType } from 'models/account/validators/sendEmailVerificationToken.schema';
import { UpdateUserSchemaType } from 'models/user/validators/updateUser.schema';

export default class AccountPrismaService {
  // Define the prisma client.
  private readonly prisma: PrismaClient;

  constructor() {
    // Initialise the PrismaClient
    this.prisma = new PrismaClient();
  }

  // Delete a user by email address.
  async deleteUserByEmailAddress(emailAddress: string): Promise<User | null> {
    return await this.prisma.user.delete({
      where: {
        emailAddress,
      },
    });
  }

  // Update a user by email address.
  async updateUserByEmailAddress(
    emailAddress: string,
    data: UpdateUserSchemaType,
  ): Promise<User | null> {
    return await this.prisma.user.update({
      where: {
        emailAddress,
      },
      data,
    });
  }

  // Delete a user by id.
  async deleteUserById(id: string): Promise<User | null> {
    return await this.prisma.user.delete({
      where: {
        id,
      },
    });
  }

  // Update a user by id.
  async updateUserById(
    data: UpdateUserSchemaType,
    id: string,
  ): Promise<User | null> {
    return await this.prisma.user.update({
      where: {
        id,
      },
      data,
    });
  }

  // Update user with email verification token.
  async updateOneWithEmailVerificationToken(
    data: SendEmailVerificationTokenSchemaType,
  ): Promise<User> {
    return await this.prisma.user.update({
      data,
      where: {
        emailAddress: data.emailAddress,
      },
    });
  }

  // Verify user email address with email verification token.
  async verifyEmailAddressWithEmailVerificationToken(
    emailVerificationToken: string,
  ): Promise<User> {
    return await this.prisma.user.update({
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

  // Find a user by their reset password token.
  async findUserByResetPasswordToken(
    passwordResetToken: string,
  ): Promise<User | null> {
    return await this.prisma.user.findUnique({
      where: {
        passwordResetToken,
      },
    });
  }

  // Find a user by their email verification token.
  async findUserByEmailVerificationToken(
    emailVerificationToken: string,
  ): Promise<User | null> {
    return await this.prisma.user.findUnique({
      where: {
        emailVerificationToken,
      },
    });
  }
}
