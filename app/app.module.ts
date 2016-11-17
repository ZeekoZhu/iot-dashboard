import { NgModule } from '@angular/core';
import { BrowserModule  } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AppRoutingModule } from './app.routing';

@NgModule({
    imports: [
        BrowserModule,
        HttpModule,
        AppRoutingModule,
    ],
    declarations: [
        AppComponent,
        DashboardComponent
    ],
    providers: [/* TODO: Providers go here */],
    bootstrap: [AppComponent],
})
export class AppModule { }
