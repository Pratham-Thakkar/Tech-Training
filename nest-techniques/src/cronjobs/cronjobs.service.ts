import { Injectable } from '@nestjs/common';
import {
  Cron,
  CronExpression,
  Interval,
  SchedulerRegistry,
} from '@nestjs/schedule';

@Injectable()
export class CronjobsService {
  constructor(private readonly schedulerRegistry: SchedulerRegistry) {}

  @Cron('2 * * * * *')
  openForBusiness() {
    console.log('Tim Hortins is open for buisness...');
    const takingOrdersJob = this.schedulerRegistry.getCronJob('takingOrders');
    takingOrdersJob.start();
  }
  @Cron('*/8 * * * * *', { name: 'takingOrders' })
  takingOrders() {
    console.log('Tim Hortins is still taking orders');
  }

  @Cron('40,45 * * * * *')
  closingSoon() {
    console.log('Tim Hortins will be closing soon');
  }

  //   @Interval(20000)
  //   breakTime() {
  //     console.log('Its Break Time.');
  //   }

  @Cron('50 * * * * *')
  closed() {
    const takingOrdersJob = this.schedulerRegistry.getCronJob('takingOrders');
    takingOrdersJob.stop();
    console.log('Tim Hortins is closed for the day');
  }
}
