import { UserAvatar, Prisma, PrismaClient } from '@prisma/client';
import { CreateUserAvatarSchemaType } from 'api/validators/userAvatars/createUserAvatar.schema';
import { UpdateUserAvatarSchemaType } from 'api/validators/userAvatars/updateUserAvatar.schema';

export class UserAvatarService {
  // Define the prisma client.
  private readonly prisma: PrismaClient;

  constructor() {
    // Initialise the PrismaClient
    this.prisma = new PrismaClient();
  }

  // Create and return a user avatar.
  async createOne(
    data: CreateUserAvatarSchemaType,
    userId: string,
  ): Promise<UserAvatar> {
    return await this.prisma.userAvatar.create({
      data: {
        ...data,
        userId,
      },
    });
  }

  // Return all user avatars.
  async findAll(): Promise<UserAvatar[]> {
    const userAvatars = await this.prisma.userAvatar.findMany();
    return userAvatars;
  }

  // Find and return a user avatar by id.
  async findOneById(id: string): Promise<UserAvatar | null> {
    return await this.prisma.userAvatar.findUnique({
      where: {
        id,
      },
    });
  }

  // Find and return a user avatar by user id.
  async findOneByUserId(userId: string): Promise<UserAvatar | null> {
    return await this.prisma.userAvatar.findUnique({
      where: {
        userId,
      },
    });
  }

  // Update and return a user avatar by id.
  async updateOneById(
    data: UpdateUserAvatarSchemaType,
    id: string,
  ): Promise<UserAvatar> {
    return await this.prisma.userAvatar.update({
      data,
      where: {
        id,
      },
    });
  }

  // Delete all user avatars.
  async deleteAll(): Promise<Prisma.BatchPayload> {
    return await this.prisma.userAvatar.deleteMany();
  }

  // Delete all user avatars by user id.
  async deleteAllByUserId(userId: string): Promise<Prisma.BatchPayload> {
    return await this.prisma.userAvatar.deleteMany({
      where: {
        userId,
      },
    });
  }

  // Delete a user avatar by id.
  async deleteOneById(id: string): Promise<UserAvatar> {
    return await this.prisma.userAvatar.delete({
      where: {
        id,
      },
    });
  }
}
