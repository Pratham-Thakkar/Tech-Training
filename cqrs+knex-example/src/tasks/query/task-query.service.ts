import { Injectable } from '@nestjs/common';
import { InjectKnex } from 'nestjs-knex';
import { Knex } from 'knex';

Injectable();
export class TaskQueryService {
  constructor(@InjectKnex() private readonly knex: Knex) {}

  async getAllTasks() {
    return this.knex.select('*').from('tasks');
  }

  async getTaskById(taskId: number) {
    return this.knex.select('*').from('tasks').where('id', taskId).first();
  }
}
