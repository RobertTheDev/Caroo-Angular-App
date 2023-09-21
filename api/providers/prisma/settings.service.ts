import { PrismaClient, User } from '@prisma/client';
import { SendEmailVerificationTokenSchemaType } from 'models/settings/validators/sendEmailVerificationToken.schema';
import { UpdateUserSchemaType } from 'models/user/validators/updateUser.schema';

export default class SettingsPrismaService {
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

  // Update a user's verification token.
  async updateEmailVerificationTokenWithEmailAddress(
    data: SendEmailVerificationTokenSchemaType,
    emailAddress: string,
  ): Promise<User> {
    return await this.prisma.user.update({
      data,
      where: {
        emailAddress,
      },
    });
  }

  // Verify a user's email with a token.
  async verifyEmailWithToken(verifyEmailToken: string): Promise<User | null> {
    return await this.prisma.user.findUnique({
      where: {
        verifyEmailToken,
      },
    });
  }
}
