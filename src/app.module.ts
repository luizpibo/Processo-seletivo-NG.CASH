import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { UserController } from './users/user.controller'
import { AppService } from './app.service';
import { UserService } from './users/user.service';

@Module({
  imports: [],
  controllers: [AppController,UserController],
  providers: [AppService, UserService],
})
export class AppModule {}
