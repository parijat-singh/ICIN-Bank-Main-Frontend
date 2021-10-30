import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, } from '@angular/forms';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  username:string=localStorage.getItem("username");

  constructor(private formBuilder: FormBuilder,
    private router: Router) { }
    
  updateForm: FormGroup;
  loading = false;
  submitted = false;

  ngOnInit(): void {
  }

  //get fval() { return this.updateForm.controls; }

  sendEmail(){
   // this.submitted = true;
   // if (this.updateForm.invalid) {
   //   return;
   // }
    //this.loading = true;
    Swal.fire(
      {
        icon: 'success',
        title: 'Message Sent',
        text:''
      })
  }

}
