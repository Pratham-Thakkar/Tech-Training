import {
  Controller,
  Get,
  Inject,
  Param,
  Post,
  Query,
  forwardRef,
} from '@nestjs/common';
import { AdminService } from 'src/admin/admin.service';
import { FileService } from './file.service';

@Controller('file')
export class FileController {
  constructor(
    @Inject(forwardRef(() => AdminService))
    private readonly fileService: FileService,
    private readonly adminService: AdminService,
  ) {}

  @Get()
  getFileById(@Query('id') id: number) {
    this.adminService.getUserById(id);
  }

  @Post()
  addPicture(@Param('id') pictureId: number) {
    return this.fileService.getById(pictureId);
  }
}
