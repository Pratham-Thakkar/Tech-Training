import { Controller, Get, Inject } from '@nestjs/common';

@Controller('casting')
export class CastingController {
  constructor(@Inject('CastingService') private readonly castingServie: any) {}

  @Get()
  cast() {
    return this.castingServie.cast('Pratham Thakkar', 'Lead Role');
  }
}
