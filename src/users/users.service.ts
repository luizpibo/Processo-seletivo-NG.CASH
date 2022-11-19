import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { PasswordProvider } from 'src/providers/password';
import { Users, Prisma } from "@prisma/client";

@Injectable()
export class UsersService {
  constructor(
    private prisma: PrismaService,
    private passwordProvider: PasswordProvider
  ){}

  async user(userWhereUniqueInput: Prisma.UsersWhereUniqueInput): Promise<Users | null>{
    const user = await this.prisma.users.findUnique({
      where: userWhereUniqueInput,
    })
    delete user.password;
    return user;
  }
  
  async create(data: Prisma.UsersCreateInput): Promise<Users> {
    const userWithEmailExists = await this.prisma.users.findUnique({
      where: {email: data.email},
    })

    if(userWithEmailExists){
      throw new HttpException("There is already an account registered with this email", HttpStatus.CONFLICT);
    }

    const userWithUsernameExists = await this.prisma.users.findUnique({
      where: {username: data.username},
    })

    if(userWithUsernameExists){
      throw new HttpException("There is already an account registered with this username", HttpStatus.CONFLICT);
    }

    const passwordHashed = await this.passwordProvider.hashPassword(data.password)

    const user = await this.prisma.users.create({
      data: {
        ...data,
        password: passwordHashed,
      },
    });

    delete user.password;

    return user
  } 

  async findOne(username: string): Promise<Users | undefined> {
    return this.prisma.users.findFirst({where:{
      username
    }});
  }

  async makeTransaction(transaction: {userUid: string, creditedAccountId: string, value: number}): Promise<boolean>{
    return true
  }
}
