import {
  Controller,
  Get,
  Inject,
  Param,
  Post,
  Query,
  forwardRef,
} from '@nestjs/common';
import { AdminService } from './admin.service';
import { FileService } from 'src/file/file.service';

@Controller('admin')
export class AdminController {
  constructor(
    @Inject(forwardRef(() => FileService))
    private readonly fileService: FileService,
    private readonly adminService: AdminService,
  ) {}

  @Get()
  getAdminById(@Param('id') id: number) {
    this.adminService.getUserById(id);
  }

  @Post()
  addPicture(@Query('id') pictureId: number) {
    return this.fileService.addById(Number(pictureId));
  }
}
