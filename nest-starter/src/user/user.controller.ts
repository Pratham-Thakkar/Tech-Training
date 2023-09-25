import {
  BadRequestException,
  Body,
  Controller,
  Get,
  HttpStatus,
  InternalServerErrorException,
  Post,
} from '@nestjs/common';
import { UserService } from './user.service';

import { CreateUserDto } from './dto/create-user.dto';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post()
  create(@Body() createUserDto: CreateUserDto) {
    try {
      if (!createUserDto.age)
        throw new BadRequestException({
          status: HttpStatus.BAD_REQUEST,
          message: 'Required fields are empty',
        });
      return this.userService.createUser(createUserDto);
    } catch (err) {
      return err.response;
    }
  }

  @Get()
  findAll() {
    try {
      return this.userService.findAllUser();
    } catch (err) {
      throw new InternalServerErrorException({
        status: HttpStatus.INTERNAL_SERVER_ERROR,
        error: 'Internal server error',
      });
    }
  }
}
