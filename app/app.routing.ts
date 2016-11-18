import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DashboardComponent } from './dashboard/dashboard.component';
import { AlarmManagerComponent } from './alarm-manager/alarm-manager.component';


const routes: Routes = [
    { path: '', redirectTo: '/dashboard/workday', pathMatch: 'full' },
    { path: 'alarm', component: AlarmManagerComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }