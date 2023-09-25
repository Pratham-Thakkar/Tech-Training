import { Controller, Get, Param } from '@nestjs/common';
import { UserService } from '../talent/user.service';

@Controller()
export class DirectorController {
  constructor(private readonly userService: UserService) {}

  @Get()
  getUserDetails(@Param('id') id: number): string {
    return this.userService.getUserById(id);
  }
}
