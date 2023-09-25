import { Module } from '@nestjs/common';
import { AdminModule } from 'src/admin/admin.module';
import { FileService } from './file.service';
import { FileController } from './file.controller';
import { AdminService } from 'src/admin/admin.service';

@Module({
  // imports: [AdminModule],
  controllers: [FileController],
  providers: [FileService, AdminService],
  exports: [FileService],
})
export class FileModule {}
