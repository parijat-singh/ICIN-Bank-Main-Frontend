import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, } from '@angular/forms';
import { Router } from '@angular/router';
import { DepositService } from '../deposit.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-deposit-withdraw',
  templateUrl: './deposit-withdraw.component.html',
  styleUrls: ['./deposit-withdraw.component.css']
})
export class DepositWithdrawComponent implements OnInit {

  constructor(private formBuilder: FormBuilder,
    private router: Router,
    private depositService: DepositService) { }
  depositForm: FormGroup;
  loading = false;
  submitted = false;

  ngOnInit() {

    var username: String = localStorage.getItem("username");
    var accNo = +localStorage.getItem("savingAccNo");

    this.depositForm = this.formBuilder.group({
      username: username,
      saccountNo: accNo,
      amount: ['', [Validators.required]]

    });

  }
  get saccountno(): any {
    return localStorage.getItem('savingAccNo');
  }
  get fval() { return this.depositForm.controls; }

  deposit() {
    this.submitted = true;
    if (this.depositForm.invalid) {
      return;
    }
    this.loading = true;
    const result: any = Object.assign({}, this.depositForm.value);
    try {
      this.depositService.insertEntry(result.username, result.saccountNo, result.amount).subscribe(
        (data: any) => {
          this.loading = false;
          if (data.depositStatus == true) {
            Swal.fire({
              icon: 'success',
              title: 'Transaction Completed Successfully',
              text: data.responseMessage
            })
          }
          else {
            Swal.fire({
              icon: 'error',
              title: 'Error: ',
              text: data.responseMessage,
            })
          }
        }
      );
    } catch {
      this.loading = false;
    }


  }
 
  /* get fwval() { return this.withdrawForm.controls;}

  withdraw() {
    this.submitted = true;
    if (this.withdrawForm.invalid) {
      return;
    }
    this.loading = true;
    const result: any = Object.assign({}, this.withdrawForm.value);
    try {
      this.withdrawService.insertEntry(result.username, result.saccountNo, result.amount).subscribe(
        (data: any) => {
          this.loading = false;
          if (data.withdrawStatus == true) {
            Swal.fire({
              icon: 'success',
              title: 'Transaction Completed Successfully',
              text: data.responseMessage
            })
          }
          else {
            Swal.fire({
              icon: 'error',
              title: 'Error: ',
              text: data.responseMessage,
            })
          }
        }
      );
    } catch {
      this.loading = false;
    }


  } */
}
