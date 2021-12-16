import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/login' },
  { path: 'meeting', loadChildren: () => import('./pages/meeting/meeting.module').then(m => m.MeetingModule) },
  { path: 'meeting-list', loadChildren: () => import('./pages/meeting-list/meeting-list.module').then(m => m.MeetingListModule) },
  { path: 'medic', loadChildren: () => import('./pages/medic/medic.module').then(m => m.MedicModule) },
  { path: 'medic-list', loadChildren: () => import('./pages/medic-list/medic-list.module').then(m => m.MedicListModule) },
  { path: 'customer', loadChildren: () => import('./pages/customer/customer.module').then(m => m.CustomerModule) },
  { path: 'customer-list', loadChildren: () => import('./pages/customer-list/customer-list.module').then(m => m.CustomerListModule) },
  { path: 'login', loadChildren: () => import('./pages/login/login.module').then(m => m.LoginModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
