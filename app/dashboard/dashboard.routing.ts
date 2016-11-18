import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import { DashboardComponent } from './dashboard.component';
import { WorkdayComponent } from './workday/workday.component';

const dashboardRoutes: Routes = [
    {
        path: 'dashboard',
        component:DashboardComponent,
        children: [
            {
                path: 'workday',
                component: WorkdayComponent
            }
        ]
    }
];

@NgModule({
    imports: [
        RouterModule.forChild(dashboardRoutes)
    ],
    exports: [
        RouterModule
    ]
})
export class DashboardRoutingModule { }