import { Observable } from 'rxjs';

export interface AccountRPCService {
  getAccount(id: string): Observable<IAccount>;
  getAccounts(data): Observable<{accounts:IAccount[]}>;
  createAccount(body: ICreateAccount): Observable<IAccount>;
  updateAccount(id: string, body: IUpdateAccount): Observable<IAccount>;
  deleteAccount(id: string): Observable<void>;
}

export interface ICreateAccount {
  firstName: string;
  lastName: string;
  phone: string;
  address: string;
  gender: string;
}

export interface IUpdateAccount {
  firstName?: string;
  lastName?: string;
  phone?: string;
  address?: string;
  gender?: string;
}

export interface IAccount {
  id: string;
  firstName: string;
  lastName: string;
  phone: string;
  address: string;
  gender: string;
}
