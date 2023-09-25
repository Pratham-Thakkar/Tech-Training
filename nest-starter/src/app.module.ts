import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CatsModule } from './cats/cats.module';
import { UserModule } from './user/user.module';
import { User } from './user/entities/user.entity';
import { TaskModule } from './tasks/task.module';
import { CastingModule } from './casting/casting.module';
import { AdminModule } from './admin/admin.module';
import { FileModule } from './file/file.module';

@Module({
  imports: [
    CatsModule,
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      password: '0809@Pratham',
      username: 'postgres',
      database: 'pgWithNest',
      entities: [User],
      synchronize: true,
      logging: true,
    }),
    UserModule,
    TaskModule,
    CastingModule,
    FileModule,
    AdminModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

//typeorm
//pg
//nestjs/typeorm
