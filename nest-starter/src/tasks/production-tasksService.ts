import { Injectable } from '@nestjs/common';
import { TaskService } from './tasks.service';

@Injectable()
export class ProductionTaskService extends TaskService {
  getAllTasks(): string[] {
    return ['Prod Task 1', 'Prod Task 2', 'Prod Task 3'];
  }
}
