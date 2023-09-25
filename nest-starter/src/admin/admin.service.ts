import { Injectable, forwardRef, Inject } from '@nestjs/common';
import { FileService } from 'src/file/file.service';

@Injectable()
export class AdminService {
  constructor(
    @Inject(forwardRef(() => FileService))
    private readonly fileService: FileService,
  ) {}

  // getFilesById(id: number) {
  //   return this.fileService.getById(id);
  // }
  getUserById(id: number) {
    return this.fileService.getById(id);
  }
}
