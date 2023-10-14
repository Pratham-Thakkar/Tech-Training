import { Body, Controller, Get, Param, Post, Query } from '@nestjs/common';

import { PrismaService } from './prisma/prisma.service';

@Controller('user')
export class AppController {
  constructor(private readonly prismaServive: PrismaService) {}

  @Get(':id')
  async getUser(@Param('id') id: string) {
    return await this.prismaServive.findUniqueUser({
      where: { id: parseInt(id) },
    });
  }

  @Post()
  async createUser(@Body() { username, email, password }) {
    return await this.prismaServive.addUser({ username, email, password });
  }
}
