import { Routes } from '@angular/router';
import {LoginComponent} from './pages/home2/home2.component';
import { RegisterComponent } from './pages/register/register.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { AddNewGoodComponent } from './pages/add-new-good/add-new-good.component';

export const routes: Routes = [
      { path: 'login', component: LoginComponent },
      { path: 'register', component: RegisterComponent },
      { path: 'dashboard', component: DashboardComponent },
      { path: 'productsaddnew', component: AddNewGoodComponent },
      // { path: '/orders/new', component: DashboardComponent },
      // { path: '/users/edit', component: DashboardComponent },
      // { path: '/orders', component: DashboardComponent },
      // { path: '/products', component: DashboardComponent }
];
