import { Module,  } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { TransactionsModule } from './transactions/transactions.module';
import { AccountsModule } from './accounts/accounts.module';
import { JwtAuthGuard } from './auth/guards/jwt-auth.guard';
import { APP_GUARD,Reflector } from '@nestjs/core';
@Module({
  imports: [UsersModule, AuthModule, TransactionsModule, AccountsModule],
  providers: [
    {
      provide: APP_GUARD,
      useFactory: ref => new JwtAuthGuard(ref),
      inject: [Reflector]
    }
  ]
})
export class AppModule {}
