import { BaseRepository } from "@/common/models/baseRepository";
import { PrismaClient, User, Prisma } from "@prisma/client";

const prisma = new PrismaClient();

export class UserRepository extends BaseRepository<
  User,
  Prisma.UserCreateInput,
  Prisma.UserUpdateInput,
  Prisma.UserDelegate
> {
  constructor() {
    super(prisma.user);
  }

  // Add any additional methods specific to UserRepository here
}
