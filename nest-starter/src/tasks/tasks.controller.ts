import { Controller, Get } from '@nestjs/common';
import { TaskService } from './tasks.service';

@Controller('task')
export class TaskController {
  constructor(private readonly taskService: TaskService) {} //Dependency Injection

  // private readonly taskService: TaskService;
  // constructor() {
  //   this.taskService = new TaskService(); // Creating an instance using 'new'
  // } //each and every time new instance will be created instead use shorthand DI

  @Get()
  getAllTask(): string[] {
    return this.taskService.getAllTasks();
  }
}
