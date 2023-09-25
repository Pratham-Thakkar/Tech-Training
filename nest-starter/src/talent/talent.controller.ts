import { Controller, Get, Param } from '@nestjs/common';
import { UserService } from './user.service';

@Controller()
export class TalentController {
  constructor(private readonly userService: UserService) {}

  @Get()
  getUserDetails(@Param('id') id: number): string {
    return this.userService.getUserById(id);
  }
}
