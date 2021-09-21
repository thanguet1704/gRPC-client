import { ICreateAccount } from './../../dist/grpc.interface.d';
import { Inject, Injectable, OnModuleInit } from '@nestjs/common';
import { ClientGrpc } from '@nestjs/microservices';
import { Observable } from 'rxjs';
import { AccountRPCService, IAccount } from './interface/account.interface';

@Injectable()
export class AccountService implements OnModuleInit {
  private accountGRPCService: AccountRPCService;

  constructor(@Inject('ACCOUNT_PACKAGE') private client: ClientGrpc) {}

  onModuleInit() {
    this.accountGRPCService =
      this.client.getService<AccountRPCService>('AccountRPCService');
  }

  getAccount(id: string): Observable<IAccount> {
    return this.accountGRPCService.getAccount(id);
  }

  getAccounts(): Observable<{accounts: IAccount[]}> {
    return this.accountGRPCService.getAccounts({});
  }

  createAccount(body: ICreateAccount): Observable<IAccount> {
    return this.accountGRPCService.createAccount(body);
  }

  updateAccount(id: string, body: ICreateAccount): Observable<IAccount> {
    return this.accountGRPCService.updateAccount(id, body);
  }

  deleteAccount(id: string): Observable<void> {
    return this.accountGRPCService.deleteAccount(id);
  }
}
