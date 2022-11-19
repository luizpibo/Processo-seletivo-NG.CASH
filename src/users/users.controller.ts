import { Controller, Get, Post, Request, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { AuthService } from 'src/auth/auth.service';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { LocalAuthGuard } from 'src/auth/local-auth.guard';
import { UsersService } from './users.service';

interface createUserRequestDTO {
  username: string,
  password: string
}
interface createUserResponseDTO {
  username: string,
}
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

    @Post('create')
    async create(@Request() {username ,password}: createUserRequestDTO):Promise<createUserResponseDTO> {
      return this.usersService.create({
        username,
        password
      });
    }

    @UseGuards(JwtAuthGuard)
    @Post('transaction')
    makeTransaction(@Request() req){
      return this.usersService.makeTransaction(req.transaction)
    }
}
