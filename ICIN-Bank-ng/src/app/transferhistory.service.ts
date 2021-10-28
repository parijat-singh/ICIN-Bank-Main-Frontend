import { Injectable } from '@angular/core';
import {TransferHistory} from './_models/transferhistory';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import{ GlobalConstants } from './global-constants';

@Injectable({
  providedIn: 'root'
})
export class TransferhistoryService {

  private url:String;

  constructor(private http:HttpClient) {
    this.url=GlobalConstants.backendURL;
   }
   public getTransferHistory(accNo):Observable<TransferHistory[]>{
    return this.http.get<TransferHistory[]>(this.url+"/account/getTransfers/"+accNo);
  }
  
}
