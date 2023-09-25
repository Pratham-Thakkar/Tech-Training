import { Controller, Post, Body } from '@nestjs/common';
import { UserService } from './user.service';
import { LoginDto } from './dto/login.dto';
import { RegisterDto } from './dto/register.dto';
import { ResponseDto } from './dto/response.dto';

@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post('register')
  async register(@Body() registerDto: RegisterDto): Promise<ResponseDto> {
    const user = await this.userService.create(registerDto);
    return {
      success: true,
      data: user,
    };
  }

  @Post('login')
  async login(@Body() loginDto: LoginDto): Promise<ResponseDto> {
    const user = await this.userService.findByEmailAndPassword(loginDto);
    //
    return user;
  }
}
