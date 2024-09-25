import { ResetPasswordComponent } from './components/auth/reset-password/reset-password.component';
import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ComingSoonComponent } from './components/coming-soon/coming-soon.component';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    //  redirectTo: 'coming-soon',pathMatch: 'full',
  },
  {
    path: 'coming-soon',
    loadComponent: () =>
      import('./components/coming-soon/coming-soon.component').then(
        (r) => r.ComingSoonComponent
      ),
  },
  {
    path: '',
    loadComponent: () =>
      import('./components/auth/auth.component').then((r) => r.AuthComponent),
    children: [
      {
        path: 'login',
        loadComponent: () =>
          import('./components/auth/login/login.component').then(
            (r) => r.LoginComponent
          ),
      },
      {
        path: 'reset-password',
        loadComponent: () =>
          import(
            './components/auth/reset-password/reset-password.component'
          ).then((r) => r.ResetPasswordComponent),
      },
      {
        path: 'confirm-code',
        loadComponent: () =>
          import('./components/auth/conf-code/conf-code.component').then(
            (r) => r.ConfCodeComponent
          ),
      },
    ],
  },
];
