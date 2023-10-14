import { Injectable } from '@nestjs/common';
import { Knex } from 'knex';
import { InjectKnex } from 'nestjs-knex';

@Injectable()
export class TaskCommandService {
  constructor(@InjectKnex() private readonly knex: Knex) {}

  async createTask(title: string, description: string): Promise<void> {
    await this.knex('tasks').insert({ title, description });
  }

  async editTask(
    taskId: number,
    title: string,
    description: string,
  ): Promise<void> {
    await this.knex('tasks').where('id', taskId).update({ title, description });
  }
}
