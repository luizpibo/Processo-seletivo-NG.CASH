import { Body, Controller, Get, Post, Request, UseGuards } from '@nestjs/common';
import { UsersService } from './users.service';
import { AuthGuard } from '@nestjs/passport';
import { AuthService } from 'src/auth/auth.service';
import { JwtAuthGuard } from 'src/auth/guards/jwt-auth.guard';
import { LocalAuthGuard } from 'src/auth/guards/local-auth.guard';
import { Roles } from 'src/roles/decorators/roles.decorator';
import { Role } from 'src/roles/enums/role.enum';
import { Public } from 'src/auth/decorators/public.decorator';

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
      // private authService: AuthService,
      private usersService: UsersService
      ){}

    // @UseGuards(LocalAuthGuard)
    // @Post('login')
    // async login(@Request() req) {
    //   return this.authService.login(req.user);
    // }

    // @UseGuards(LocalAuthGuard)
    @Public()
    @Post('create')
    async create(@Body() {username ,password}: createUserRequestDTO):Promise<createUserResponseDTO> {
      return this.usersService.create({
        username,
        password
      });
    }

    // @UseGuards(JwtAuthGuard)
    @Post('transaction')
    makeTransaction(@Request() req){
      return this.usersService.makeTransaction(req.transaction)
    }

    @Public()
    @Get()
    findAll(){
      return this.usersService.findAll();
    }

    @Public()
    @Get('account')
    findAllAccounts(@Request() req){
      return this.usersService.findAllUserAccount(req.username);
    }
}
