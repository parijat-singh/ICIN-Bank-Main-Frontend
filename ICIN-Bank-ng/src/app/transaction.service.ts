import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Transaction } from './_models/transaction'
import { SavingAccount } from './_models/savingaccount'
import { Observable } from 'rxjs';
import{ GlobalConstants } from './global-constants';

@Injectable({
  providedIn: 'root'
})
export class TransactionService {

  constructor(private http:HttpClient) {
   }
   public getTransactions(accNo):Observable<Transaction[]>{
    return this.http.get<Transaction[]>(GlobalConstants.backendURL+"/account/getHistory/"+accNo);
  }
  public getSavingAccount(username):Observable<SavingAccount>{
    return this.http.get<SavingAccount>(GlobalConstants.backendURL+"/account/getsaving/"+username);
  }
  
}
