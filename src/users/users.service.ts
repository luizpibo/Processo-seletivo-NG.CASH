import { Injectable } from '@nestjs/common';

class User {
    public username: string
    public password: string
}

@Injectable()
export class UsersService {
  private readonly users = [
    {
      userId: 1,
      username: 'john',
      password: 'changeme',
    },
    {
      userId: 2,
      username: 'maria',
      password: 'guess',
    },
  ];

  async findOne(username: string): Promise<User | undefined> {
    return this.users.find((user) => user.username === username);
  }

  async makeTransaction(transaction: {userUid: string, creditedAccountId: string, value: number}): Promise<boolean>{
    return true
  }
}
