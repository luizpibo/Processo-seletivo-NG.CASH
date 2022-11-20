import { Module } from '@nestjs/common';
import { AccountsService } from './accounts.service';
import { AccountsController } from './accounts.controller';
import { JwtAuthGuard } from 'src/auth/guards/jwt-auth.guard';
import { APP_GUARD } from '@nestjs/core';

@Module({
  controllers: [AccountsController],
  providers: [AccountsService,{
    provide: APP_GUARD,
    useClass: JwtAuthGuard
  }],
  exports: [AccountsService],
})

export class AccountsModule {}
