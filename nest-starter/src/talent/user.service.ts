import { Injectable } from '@nestjs/common';

@Injectable()
export class UserService {
  getUserById(id: number): string {
    return `User details with id = ${id}`;
  }
}
