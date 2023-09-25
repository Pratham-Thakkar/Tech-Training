import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ScheduleModule } from '@nestjs/schedule';
import { CronjobsModule } from './cronjobs/cronjobs.module';
import { SampleController } from './sample.controller';

@Module({
  imports: [CronjobsModule, ScheduleModule.forRoot()],
  controllers: [AppController, SampleController],
  providers: [AppService],
})
export class AppModule {}
