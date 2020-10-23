import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => {
      if (window.innerWidth > 768) {
        return import('./../login-desktop/login-desktop.module').then(
          (m) => m.LoginDesktopModule
        );
      } else {
         return import('./../login-mobile/login-mobile.module').then(
           (m) => m.LoginMobileModule
         );
      }
    },
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LoginPageRoutingModule {}
