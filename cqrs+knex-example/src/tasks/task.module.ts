import { Module } from '@nestjs/common';
import { KnexModule } from 'nestjs-knex';
import { TaskController } from './task.controller';
import { TaskQueryService } from './query/task-query.service';
import { TaskCommandService } from './command/task-command.service';
const KnexConfig = require('../../knexfile');

@Module({
  imports: [
    KnexModule.forRoot({
      config: KnexConfig['development'],
    }),
  ],
  controllers: [TaskController],
  providers: [TaskCommandService, TaskQueryService],
})
export class TaskModule {}
