import { Body, Controller, Get, Param, Post, Put, Query } from '@nestjs/common';
import { TaskCommandService } from './command/task-command.service';
import { TaskQueryService } from './query/task-query.service';
import { log } from 'console';

@Controller('tasks')
export class TaskController {
  constructor(
    private readonly taskCommandServive: TaskCommandService,
    private readonly taskQueryService: TaskQueryService,
  ) {}

  @Get()
  async getTasks() {
    return this.taskQueryService.getAllTasks();
  }

  @Get(':id')
  async getTaskById(@Param('id') taskId: string) {
    return this.taskQueryService.getTaskById(parseInt(taskId));
  }

  @Post()
  async addTask(@Body() { title, description }) {
    return this.taskCommandServive.createTask(title, description);
  }

  @Put(':id')
  async updateTask(
    @Param('id') taskId: number,
    @Body() { title, description },
  ) {
    return this.taskCommandServive.editTask(taskId, title, description);
  }
}
