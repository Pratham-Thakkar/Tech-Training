import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

export class PrismaService {
  constructor() {
    if (!prisma) {
      throw new Error('Prisma client is not connected.');
    }
  }

  async addUser(data: { username: string; email: string; password: string }) {
    return prisma.user.create({
      data: {
        username: data.username,
        email: data.email,
        password: data.password,
      },
    });
  }

  async findUniqueUser(params: { where: { id: number } }) {
    return prisma.user.findUnique(params);
  }

  async $onDestroy() {
    prisma.$disconnect();
  }
}
