import { Body, Controller, Get, HttpCode, Post, Res } from '@nestjs/common';
import { CreateCatDto } from './dto/create-cat.dto';
import { CatsService } from './cats.service';
import { Response } from 'express';

@Controller('cats')
export class CatsController {
  constructor(private catsService: CatsService) {}

  @Post()
  @HttpCode(201)
  addCat(@Body() createCatDto: CreateCatDto): void {
    this.catsService.create(createCatDto);
  }

  @Get()
  async findAll(@Res() res: Response) {
    res.send({ status: 'success', message: this.catsService.findAll() });
  }
}
