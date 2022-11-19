import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { TransactionsModule } from './transactions/transactions.module';
import { AccountsModule } from './accounts/accounts.module';
import { UsersController } from './users/users.controller';
import { UsersService } from './users/users.service';
import { TransactionsController } from './transactions/transactions.controller';
import { AccountsController } from './accounts/accounts.controller';
import { TransactionsService } from './transactions/transactions.service';
import { AccountsService } from './accounts/accounts.service';

@Module({
  imports: [UsersModule, AuthModule, TransactionsModule, AccountsModule],
  controllers: [UsersController, TransactionsController, AccountsController],
  providers: [UsersService, TransactionsService, AccountsService],
})
export class AppModule {}
