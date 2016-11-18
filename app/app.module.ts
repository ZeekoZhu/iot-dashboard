import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { ChartsModule } from 'ng2-charts/ng2-charts';


import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { WorkdayComponent } from './dashboard/workday/workday.component';
import { AlarmManagerComponent } from './alarm-manager/alarm-manager.component';

import { DashboardRoutingModule } from './dashboard/dashboard.routing';
import { AppRoutingModule } from './app.routing';

@NgModule({
    imports: [
        BrowserModule,
        HttpModule,
        AppRoutingModule,
        DashboardRoutingModule,
        ChartsModule
    ],
    declarations: [
        AppComponent,
        DashboardComponent,
        WorkdayComponent,
        AlarmManagerComponent
    ],
    providers: [/* TODO: Providers go here */],
    bootstrap: [AppComponent],
})
export class AppModule { }
