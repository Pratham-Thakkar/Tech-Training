import { Module } from '@nestjs/common';
import { TalentController } from './talent.controller';
import { UserService } from './user.service';

@Module({
  controllers: [TalentController],
  providers: [UserService],
})
export class TalentModule {}
