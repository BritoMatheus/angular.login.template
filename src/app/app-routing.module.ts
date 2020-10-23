import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./pages/login/login-page/login-page.module').then(
        (m) => m.LoginPageModule
      ),
  },
  {
    path: 'mobile',
    loadChildren: () =>
      import('./pages/login/login-mobile/login-mobile.module').then(
        (m) => m.LoginMobileModule
      ),
  },
  {
    path: 'desktop',
    loadChildren: () =>
      import('./pages/login/login-desktop/login-desktop.module').then(
        (m) => m.LoginDesktopModule
      ),
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
