import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-login-mobile',
  templateUrl: './login-mobile.component.html',
  styleUrls: ['./login-mobile.component.scss'],
})
export class LoginMobileComponent implements OnInit {
  login: boolean = true;

  constructor() {}

  ngOnInit(): void {}

  onChange(): void {
    this.login = !this.login;
  }
}
