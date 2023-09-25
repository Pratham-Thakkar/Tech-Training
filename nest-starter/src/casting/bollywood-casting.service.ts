import { Injectable } from '@nestjs/common';

@Injectable()
export class BollywoodCastingService {
  cast(actor: string, role: string) {
    return `Bollywood casting: ${actor} for role ${role}`;
  }
}
