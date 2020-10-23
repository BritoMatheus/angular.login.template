import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginDesktopComponent } from './login-desktop.component';

const routes: Routes = [{ path: '', component: LoginDesktopComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LoginDesktopRoutingModule { }
