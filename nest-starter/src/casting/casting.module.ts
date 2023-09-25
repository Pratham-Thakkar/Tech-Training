import { Module, Provider } from '@nestjs/common';
import { CastingController } from './casting.controller';
import { CastingConfigService } from './casting-config.service';
import { HollywoodCastingService } from './hollywood-casting.service';
import { BollywoodCastingService } from './bollywood-casting.service';

const CastingProvider: Provider = {
  provide: 'CastingService',
  useFactory: (configService: CastingConfigService) => {
    const agency = configService.getCurrentAgency();

    if (agency === 'hollywood') return new HollywoodCastingService();
    else return new BollywoodCastingService();
  },
  inject: [CastingConfigService],
};

@Module({
  controllers: [CastingController],
  providers: [CastingProvider, CastingConfigService],
})
export class CastingModule {}
