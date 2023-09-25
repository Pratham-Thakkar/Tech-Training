import { Module } from '@nestjs/common';
import { TaskController } from './tasks.controller';
import { TaskService } from './tasks.service';
import { DevelopmentTaskService } from './development-tasksService';
import { ProductionTaskService } from './production-tasksService';
import 'dotenv/config';

@Module({
  controllers: [TaskController],
  providers: [
    {
      provide: TaskService,
      useClass:
        process.env.NODE_ENV === 'dev'
          ? DevelopmentTaskService
          : ProductionTaskService,
    },
  ],
})
export class TaskModule {}
