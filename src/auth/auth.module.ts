import { Module } from '@nestjs/common';
import { PassportModule  } from '@nestjs/passport';
import { JwtModule,  } from '@nestjs/jwt';
import { UsersModule } from 'src/users/users.module';
import { LocalStrategy } from './strategies/local.strategy';
import { JwtStrategy } from './strategies/jwt.strategy';
import { PasswordProvider } from 'src/providers/password';
import { AuthService } from './auth.service';
import { PrismaService } from 'src/prisma.service';
import { UsersService } from 'src/users/users.service';
import { AuthController } from './auth.controller';
import { } from '@nestjs/passport';

@Module({
  imports: [
    UsersModule, 
    PassportModule,
    JwtModule.register({
      secret: process.env.JWT_SECRET,
      signOptions: { expiresIn: '60s'},
    }),
  ],
  providers: [
    AuthService, 
    UsersService,
    PasswordProvider,
    PrismaService,
    LocalStrategy, 
    JwtStrategy,
  ],
  exports: [
    AuthService
  ],
  controllers: [AuthController],
})
export class AuthModule {}
