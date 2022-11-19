import { Injectable } from '@nestjs/common';
import { IAccounts } from 'src/interface/IAccounts';

@Injectable()
export class AccountsService {
    private readonly Accounts: IAccounts[] = [];

    findAll(): IAccounts[]{
        return this.Accounts;
    }
}
