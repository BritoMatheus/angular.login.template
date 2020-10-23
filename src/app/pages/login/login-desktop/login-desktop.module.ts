import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginDesktopRoutingModule } from './login-desktop-routing.module';
import { LoginDesktopComponent } from './login-desktop.component';


@NgModule({
  declarations: [LoginDesktopComponent],
  imports: [
    CommonModule,
    LoginDesktopRoutingModule
  ]
})
export class LoginDesktopModule { }
