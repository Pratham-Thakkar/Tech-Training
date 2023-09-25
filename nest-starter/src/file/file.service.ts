import { Injectable, Inject, forwardRef } from '@nestjs/common';
import { AdminService } from 'src/admin/admin.service';

@Injectable()
export class FileService {
  constructor(
    @Inject(forwardRef(() => AdminService))
    private readonly adminService: AdminService,
  ) {}

  private pictures = [];
  addById(pictureId: number) {
    this.pictures.push({
      id: pictureId,
      url: 'https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50',
    });
    console.log('Add', this.pictures);
  }

  getById(pictureId: number) {
    console.log('this.pictures', this.pictures);
    return this.pictures;
  }

  getUserProfilePicture(userId: number) {
    return this.adminService.getUserById(userId);
  }
}
