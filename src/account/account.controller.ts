import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { Observable } from 'rxjs';
import { AccountService } from './account.service';
import { IAccount, ICreateAccount } from './interface/account.interface';

@Controller('/accounts')
export class AccountController {
  constructor(private accountService: AccountService) {}

  @Get(':id')
  getAccount(@Param() id: string): Observable<IAccount> {
    return this.accountService.getAccount(id);
  }

  @Get()
  getAccounts(): Observable<IAccount[]> {
    return this.accountService.getAccounts();
  }

  @Post()
  createAccount(@Body() body: ICreateAccount): Observable<IAccount> {
    return this.accountService.createAccount(body);
  }

  @Patch(':id')
  updateAccount(
    @Param() id: string,
    @Body() body: ICreateAccount,
  ): Observable<IAccount> {
    return this.accountService.updateAccount(id, body);
  }

  @Delete(':id')
  @HttpCode(204)
  deleteAccount(@Param() id: string): Observable<void> {
    return this.accountService.deleteAccount(id);
  }
}
