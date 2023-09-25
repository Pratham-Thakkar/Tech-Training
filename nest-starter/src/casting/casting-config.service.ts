import { Injectable } from '@nestjs/common';
import 'dotenv/config';

@Injectable()
export class CastingConfigService {
  getCurrentAgency(): string {
    return process.env.CASTING_AGENCY;
  }
}
