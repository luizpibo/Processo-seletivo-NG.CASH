import { Controller, Get, Post } from '@nestjs/common';
import { UserService } from '../services/user.service';

interface IUser{
    username: string;
    password: string;
}

@Controller()
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get("/user")
  getHello(): string {
    return this.userService.createUser();
  }

  @Post()
  createUser(): string {
    return this.userService.createUser();
  }
}