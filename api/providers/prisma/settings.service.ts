import { PrismaClient, User } from '@prisma/client';
import { UpdateUserSchemaType } from 'models/user/validators/updateUser.schema';

export class SettingsPrismaService {
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

  // Update a user by email verification token.
  async updateUserByEmailVerificationToken(
    verifyEmailToken: string,
    data: UpdateUserSchemaType,
  ): Promise<User | null> {
    return await this.prisma.user.update({
      where: {
        verifyEmailToken,
      },
      data,
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
}
