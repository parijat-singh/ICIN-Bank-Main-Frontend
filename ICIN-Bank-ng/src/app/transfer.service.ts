import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TransferService {

    readonly rootUrl = 'http://localhost:8080';
  
    constructor(private http: HttpClient) { }
  
    insertEntry(username:string, saccount:string,raccount:string,amount:number) {
      var body = {
        username:username,
        saccount: saccount,
        raccount:raccount,
        amount:amount
      }
      return this.http.post(this.rootUrl + '/account/transfer', body);
    }
  }
  