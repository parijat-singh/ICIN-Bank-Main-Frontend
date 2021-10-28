import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import{ GlobalConstants } from './global-constants';

@Injectable({
  providedIn: 'root'
})
export class TransferService {

    constructor(private http: HttpClient) { }
  
    insertEntry(username:string, saccount:string,raccount:string,amount:number) {
      var body = {
        username:username,
        saccount: saccount,
        raccount:raccount,
        amount:amount
      }
      return this.http.post(GlobalConstants.backendURL + '/account/transfer', body);
    }
  }
  