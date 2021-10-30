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
  }
}
