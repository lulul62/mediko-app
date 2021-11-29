import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MedicComponent } from './medic.component';

const routes: Routes = [
    { path: '', component: MedicComponent },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class MedicRouterModule { }
