import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login-desktop',
  templateUrl: './login-desktop.component.html',
  styleUrls: ['./login-desktop.component.scss']
})
export class LoginDesktopComponent implements OnInit {
  login: boolean = true;

  constructor() { }

  ngOnInit(): void {
  }

}
