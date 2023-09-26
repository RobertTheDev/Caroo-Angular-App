import { PrismaClient } from '@prisma/client';
import AuthenticatedUser from 'models/auth/types/AuthenticatedUser';
import { UpdateUserSchemaType } from 'models/user/validators/updateUser.schema';

// Defines the fields the user data should return. Avoids displaying sensitive data.
const userReturnFields = {
  id: true,
  createdAt: true,
  updatedAt: true,
  avatar: true,
  emailAddress: true,
  emailVerified: true,
  firstName: true,
  lastName: true,
};

export default class ProfilePrismaService {
  // Define the prisma client.
  private readonly prisma: PrismaClient;

  constructor() {
    // Initialise the PrismaClient
    this.prisma = new PrismaClient();
  }

  // Gets a user by id proivded from the session.
  async getProfile(id: string): Promise<AuthenticatedUser | null> {
    return await this.prisma.user.findUnique({
      select: userReturnFields,
      where: {
        id,
      },
    });
  }

  // Gets a user by id proivded from the session.
  // Update a user by id.
  async updateProfile(
    data: UpdateUserSchemaType,
    id: string,
  ): Promise<AuthenticatedUser> {
    return await this.prisma.user.update({
      select: userReturnFields,
      where: {
        id,
      },
      data,
    });
  }
}
