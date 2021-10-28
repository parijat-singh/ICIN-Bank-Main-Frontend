import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import{ GlobalConstants } from './global-constants';

@Injectable({
  providedIn: 'root'
})
export class DepositService {

    
  
    constructor(private http: HttpClient) { }
  
    insertEntry(username:string, saccount:string,amount:number) {
      var body = {
        username:username,
        saccount: saccount,
        amount:amount
      }
      return this.http.post(GlobalConstants.backendURL + '/account/deposit', body);
    }
  }
  