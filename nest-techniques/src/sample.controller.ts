import { Controller, Get, Res } from '@nestjs/common';
import { Response } from 'express';

@Controller('sample')
export class SampleController {
  @Get()
  getSampleData() {
    return { message: 'This is some sample data.' };
  }
}
