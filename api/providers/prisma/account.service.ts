import { PrismaClient, User } from '@prisma/client';
import { UpdateEmailSchemaType } from 'models/account/validators/updateEmail.schema';
import { SendEmailVerificationTokenSchemaType } from 'models/account/validators/sendEmailVerificationToken.schema';

export default class AccountPrismaService {
  // Define the prisma client.
  private readonly prisma: PrismaClient;

  constructor() {
    // Initialise the PrismaClient
    this.prisma = new PrismaClient();
  }

  // Closes and deletes a user account by email address.
  async closeAccount(id: string): Promise<User> {
    return await this.prisma.user.delete({
      where: {
        id,
      },
    });
  }

  // Update a user by id.
  async updateEmailAddress(
    id: string,
    data: UpdateEmailSchemaType,
  ): Promise<User | null> {
    return await this.prisma.user.update({
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
  async updatePassword(id: string, password: string): Promise<User | null> {
    return await this.prisma.user.update({
      where: {
        id,
      },
      data: {
        password,
      },
    });
  }

  // Update user with email verification token.
  async updateOneWithEmailVerificationToken(
    id: string,
    data: SendEmailVerificationTokenSchemaType,
  ): Promise<User> {
    return await this.prisma.user.update({
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
