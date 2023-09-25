import { Injectable } from '@nestjs/common';

@Injectable()
export class TaskService {
  getAllTasks(): string[] {
    return ['Task1', 'Task2', 'Task3'];
  }
}
