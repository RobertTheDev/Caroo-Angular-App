import { PrismaClient } from '@prisma/client';
import AuthenticatedUser from 'models/auth/types/AuthenticatedUser';
import { ResetPasswordWithTokenSchemaType } from 'models/auth/validators/resetPasswordWithToken.schema';
import { SendPasswordResetTokenSchemaType } from 'models/auth/validators/sendPasswordResetToken.schema';
import { SignUpSchemaType } from 'models/auth/validators/signUp.schema';

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

export default class AuthPrismaService {
  // Define the prisma client.
  private readonly prisma: PrismaClient;

  constructor() {
    // Initialise the PrismaClient
    this.prisma = new PrismaClient();
  }

  // Signs up a user.
  async signUp(data: SignUpSchemaType): Promise<AuthenticatedUser> {
    return await this.prisma.user.create({
      select: userReturnFields,
      data,
    });
  }

  // Login a user by finding user with email address.
  async login(emailAddress: string): Promise<AuthenticatedUser | null> {
    return await this.prisma.user.findUnique({
      select: userReturnFields,
      where: {
        emailAddress,
      },
    });
  }

  // Insert the password reset token and expiry into user after sending password reset.
  async sendPasswordResetByEmailAddress(
    emailAddress: string,
    data: SendPasswordResetTokenSchemaType,
  ): Promise<AuthenticatedUser> {
    return await this.prisma.user.update({
      data,
      select: userReturnFields,
      where: {
        emailAddress,
      },
    });
  }

  // Reset the user's password using the password reset token.
  async resetPasswordWithToken(
    passwordResetToken: string,
    data: ResetPasswordWithTokenSchemaType,
  ): Promise<AuthenticatedUser> {
    return await this.prisma.user.update({
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
  async getAuthenticatedUserById(
    id: string,
  ): Promise<AuthenticatedUser | null> {
    return await this.prisma.user.findUnique({
      select: userReturnFields,
      where: {
        id,
      },
    });
  }
}
