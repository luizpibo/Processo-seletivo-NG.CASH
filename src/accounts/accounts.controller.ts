import { Controller, Get } from '@nestjs/common';
import { IAccounts } from 'src/interface/IAccounts';
import { AccountsService } from './accounts.service';

@Controller('accounts')
export class AccountsController {
    constructor(private accountsService: AccountsService){}

    @Get()
    async findAll(): Promise<IAccounts[]>{
        return this.accountsService.findAll();
    }
}
