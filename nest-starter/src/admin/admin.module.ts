import { Module } from '@nestjs/common';
import { AdminController } from './admin.controller';
import { AdminService } from './admin.service';
import { FileModule } from 'src/file/file.module';
import { FileService } from 'src/file/file.service';

@Module({
  // imports: [FileModule],
  controllers: [AdminController],
  providers: [AdminService, FileService],
  exports: [AdminService],
})
export class AdminModule {}
