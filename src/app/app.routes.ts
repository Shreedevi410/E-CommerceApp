import { Routes } from '@angular/router';
import { EmptyComponent } from './empty/empty';
import { Home } from './home/home';
import { SellerAuth } from './seller-auth/seller-auth';

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: EmptyComponent
  },
  {
    path: 'home',
    component: Home
  },
  {
    path: 'seller-auth',
    component: SellerAuth
  }
];
