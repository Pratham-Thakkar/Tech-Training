import { Injectable } from '@nestjs/common';

@Injectable()
export class HollywoodCastingService {
  cast(actor: string, role: string) {
    return `Hollywood Casting: ${actor} for role ${role}`;
  }
}
