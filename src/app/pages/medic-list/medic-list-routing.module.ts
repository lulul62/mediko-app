import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MedicListComponent } from './medic-list.component';

const routes: Routes = [
  { path: '', component: MedicListComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MedicListRoutingModule { }
