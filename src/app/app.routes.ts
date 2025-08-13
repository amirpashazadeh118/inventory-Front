import { Routes } from '@angular/router';
import {LoginComponent} from './pages/home2/home2.component';
import { RegisterComponent } from './pages/register/register.component';

export const routes: Routes = [
      { path: 'login', component: LoginComponent },
      { path: 'register', component: RegisterComponent },
];
