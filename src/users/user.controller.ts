import { Controller, Get, HttpCode, Post, Query, Req } from '@nestjs/common';
import { Request } from 'express';
import { UserService } from './user.service';

interface IUser{
    username: string;
    password: string;
}

@Controller("user")
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get()
  getUser(@Query('userUid') userUid): string {
    // return this.userService.createUser();
    return userUid
  }

  @Post()
  @HttpCode(204)
  createUser(@Req() request: Request): string {
    return this.userService.createUser();
  }
}