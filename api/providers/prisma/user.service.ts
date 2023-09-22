import { Prisma, PrismaClient, User } from '@prisma/client';
import { ChangeEmailSchemaType } from 'models/account/validators/changeEmail.schema';
import { UpdateUserSchemaType } from 'models/user/validators/updateUser.schema';
import { ChangePasswordSchemaType } from 'models/account/validators/changePassword.schema';
import { SignUpSchemaType } from 'models/auth/validators/signUp.schema';
import { SendPasswordResetTokenSchemaType } from 'models/auth/validators/sendPasswordResetToken.schema';
import { ResetPasswordWithTokenSchemaType } from 'models/auth/validators/resetPasswordWithToken.schema';

export default class UserPrismaService {
  // Define the prisma client.
  private readonly prisma: PrismaClient;

  constructor() {
    // Initialise the PrismaClient
    this.prisma = new PrismaClient();
  }

  // Creates a user during sign up.
  async createUser(data: SignUpSchemaType): Promise<User> {
    return await this.prisma.user.create({
      data,
    });
  }

  // Delete all users.
  async deleteAll(): Promise<Prisma.BatchPayload> {
    return await this.prisma.user.deleteMany();
  }

  // Update and return a user by id.
  async deleteOneById(id: string): Promise<User> {
    return await this.prisma.user.delete({
      where: {
        id,
      },
    });
  }

  // Return all users.
  async findAll(): Promise<User[]> {
    return await this.prisma.user.findMany();
  }

  // Find and return a user by email address.
  async findOneByEmailAddress(emailAddress: string): Promise<User | null> {
    return await this.prisma.user.findUnique({
      where: {
        emailAddress,
      },
    });
  }

  // Find and return a user by id.
  async findOneById(id: string): Promise<User | null> {
    return await this.prisma.user.findUnique({
      where: {
        id,
      },
    });
  }

  // Update a user email by id.
  async updateEmailById(
    data: ChangeEmailSchemaType,
    id: string,
  ): Promise<User> {
    return await this.prisma.user.update({
      data,
      where: {
        id,
      },
    });
  }

  // Update and return a user by id.
  async updateOneById(data: UpdateUserSchemaType, id: string): Promise<User> {
    return await this.prisma.user.update({
      data,
      where: {
        id,
      },
    });
  }

  // Update user with reset password token by email address.
  async updateOneWithResetPasswordToken(
    data: SendPasswordResetTokenSchemaType,
  ): Promise<User> {
    return await this.prisma.user.update({
      data,
      where: {
        emailAddress: data.emailAddress,
      },
    });
  }

  // Update user with reset password token by email address.
  async updatePasswordWithResetPasswordToken(
    passwordResetToken: string,
    data: ResetPasswordWithTokenSchemaType,
  ): Promise<User> {
    return await this.prisma.user.update({
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
  async findUserByResetPasswordToken(
    passwordResetToken: string,
  ): Promise<User | null> {
    return await this.prisma.user.findUnique({
      where: {
        passwordResetToken,
      },
    });
  }

  // Update a password by id.
  async updatePasswordById(
    data: ChangePasswordSchemaType,
    id: string,
  ): Promise<User> {
    return await this.prisma.user.update({
      data,
      where: {
        id,
      },
    });
  }
}
