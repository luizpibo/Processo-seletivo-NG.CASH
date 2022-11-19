import { Controller, Get, Post, Request, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { AuthService } from 'src/auth/auth.service';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { LocalAuthGuard } from 'src/auth/local-auth.guard';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
    constructor(
      private authService: AuthService,
      private usersService: UsersService
      ){}

    @UseGuards(LocalAuthGuard)
    @Post('login')
    async login(@Request() req) {
      return this.authService.login(req.user);
    }
    @UseGuards(LocalAuthGuard)
    @Post('create')
    async create(@Request() req) {
      return this.authService.login(req.user);
    }
    @UseGuards(JwtAuthGuard)
    @Post('transaction')
    makeTransaction(@Request() req){
      return this.usersService.makeTransaction(req.transaction)
    }
}
