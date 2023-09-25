import { BadRequestException, HttpException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from '../entity/user-entity';
import * as bcrypt from 'bcrypt';
import { LoginDto } from './dto/login.dto';
import { RegisterDto } from './dto/register.dto';
import { ResponseDto } from './dto/response.dto';
import { sign } from 'jsonwebtoken';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
  ) {}

  async create(registerDto: RegisterDto): Promise<ResponseDto> {
    const salt = await bcrypt.genSalt();
    const hashedPassword = await bcrypt.hash(registerDto.password, salt);
    const user = this.userRepository.create({
      email: registerDto.email,
      password: hashedPassword,
    });
    const savedUser = await this.userRepository.save(user);
    return {
      success: true,
      data: savedUser,
    };
  }

  async findByEmailAndPassword(loginDto: LoginDto): Promise<ResponseDto> {
    const user = await this.userRepository.findOne({
      where: { email: loginDto.email },
    });
    if (!user) {
      throw new Error('Invalid email or password');
    }
    const passwordMatch = await bcrypt.compare(
      loginDto.password,
      user.password,
    );
    if (!passwordMatch) throw new BadRequestException();
    const token = sign(
      { exp: Math.round(Date.now() * 60 * 60), id: user.id },
      'pratham',
    );
    return {
      success: true,
      data: {
        id: user.id,
        email: user.email,
        token,
      },
    };
  }
}
