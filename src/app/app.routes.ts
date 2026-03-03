import { Routes } from '@angular/router';
import { Signup } from './features/signup/signup';
import { Login } from './features/login/login';
import { Dashboard } from './features/dashboard/dashboard';
import { Layout } from './layout/layout';
import { authGuard } from './core/guards/auth-guard';
import { Home } from './features/home/home';

export const routes: Routes = [
  {path: 'login', component: Login},
  {path: 'signup', component: Signup},
  {path: 'layout', component: Layout,
    canActivate: [authGuard],
    children: [
      {path: 'home', component: Home},
      {path: 'dashboard', component: Dashboard},
      {path: '', redirectTo: 'home', pathMatch: 'full'},
  ]},
  {path: '', redirectTo: 'home', pathMatch: 'full'},
];
