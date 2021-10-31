import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor( private router: Router,) { }

  ngOnInit(): void {
  }

  handleLogout(){
    sessionStorage.removeItem("username");
    sessionStorage.clear();
    this.router.navigate(["login"]);
  }
}
