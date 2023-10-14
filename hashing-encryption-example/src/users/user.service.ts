import { Injectable } from '@nestjs/common';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UserService {
  async hashPassword(password: string) {
    const saltHashPassword = 10;
    return bcrypt.hash(password, saltHashPassword);
  }

  async verifyPassword(plainTextPassword: string, hashPassword: string) {
    return bcrypt.compare(plainTextPassword, hashPassword);
  }
}
