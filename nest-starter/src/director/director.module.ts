import { Module } from '@nestjs/common';

import { DirectorController } from './director.controller';
import { UserService } from 'src/talent/user.service';

@Module({
  controllers: [DirectorController],
  providers: [
    {
      provide: UserService,
      useExisting: UserService,
    },
  ],
})
export class TalentModule {}
