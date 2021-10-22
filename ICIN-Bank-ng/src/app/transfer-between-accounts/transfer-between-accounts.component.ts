import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, } from '@angular/forms';
import { Router } from '@angular/router';
import { TransferService } from '../transfer.service';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-transfer-between-accounts',
  templateUrl: './transfer-between-accounts.component.html',
  styleUrls: ['./transfer-between-accounts.component.css']
})
export class TransferBetweenAccountsComponent implements OnInit {

  constructor( private formBuilder: FormBuilder,
    private router: Router,
    private transferService: TransferService) { }
  transferForm: FormGroup;
  loading = false;
  submitted = false;
  
  ngOnInit() {
    
   var username:String=localStorage.getItem("username");
   var accNo=+localStorage.getItem("savingAccNo");
   
   this.transferForm = this.formBuilder.group({
      username : username,
      saccountNo: accNo,
      raccountNo: ['', [Validators.required]],
      amount:['',[Validators.required]]
  
  });

}
get saccountno(): any {
  return localStorage.getItem('savingAccNo');
}
get fval() { return this.transferForm.controls; }

  transfer(){
    this.submitted = true;
    if (this.transferForm.invalid) {
      return;
    }
    this.loading = true;
    const result:any = Object.assign({}, this.transferForm.value);
        
    
    try{
      this.transferService.insertEntry(result.username,result.saccountNo,result.raccountNo,result.amount).subscribe(
        (data : any) =>{
         this.loading=false;
         if(data.transferStatus==true){
          Swal.fire({
            icon: 'success',
            title: 'Transaction Completed Successfully',
            text:data.responseMessage
          })
         }
         else{
          Swal.fire({
            icon: 'error',
            title: 'Error: ',
            text: data.responseMessage,
          })
         }
         }
       );
    }catch{
      this.loading=false;
    }
      

  }
}





  
  
  
  

  

  

  


