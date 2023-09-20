import { Prisma, PrismaClient, User } from '@prisma/client';
import { ChangeEmailSchemaType } from 'models/auth/validators/changeEmail.schema';
import { ChangePasswordSchemaType } from 'models/auth/changePassword.schema';
import { SignUpSchemaType } from 'models/auth/validators/signUp.schema';
import { UpdateUserSchemaType } from 'models/user/validators/updateUser.schema';

export class UserService {
  // Define the prisma client.
  private readonly prisma: PrismaClient;

  constructor() {
    // Initialise the PrismaClient
    this.prisma = new PrismaClient();
  }

  // Create and return a user after sign up.
  async createUser(data: SignUpSchemaType): Promise<User> {
    return await this.prisma.user.create({ data });
  }

  // Return all users.
  async findAll(): Promise<User[]> {
    return await this.prisma.user.findMany();
  }

  // Find and return a user by email.
  async findOneByEmail(email: string): Promise<User | null> {
    return await this.prisma.user.findUnique({
      where: {
        email,
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

  // Update and return a user by id.
  async updateOneById(data: UpdateUserSchemaType, id: string): Promise<User> {
    return await this.prisma.user.update({
      data,
      where: {
        id,
      },
    });
  }

  // Update and return a user by id.
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
}
