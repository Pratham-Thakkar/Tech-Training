import { Injectable } from '@nestjs/common';
import { TaskService } from './tasks.service';

@Injectable()
export class DevelopmentTaskService extends TaskService {
  getAllTasks(): string[] {
    return ['Dev Tasks 1', 'Dev Tasks 2', 'Dev Tasks 3', 'Dev Tasks 4'];
  }
}
