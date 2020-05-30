import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { appRoutingModule } from './app.routing';
import { JwtInterceptor, ErrorInterceptor } from './common';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home';
import { DashboardComponent } from './components/dashboard';
import { LoginComponent } from './components/login';
import { AdminComponent } from './components/admin';
import { RegisterComponent } from './components/register';
import { AlertComponent } from './components/alert';

// Ng Prime Modules
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// import {InputTextModule, ButtonModule,ConfirmDialogModule} from 'primeng/primeng';
import { TableModule } from 'primeng/table';

@NgModule({
    imports: [
        BrowserModule,
        ReactiveFormsModule,
        HttpClientModule,
        appRoutingModule,
        BrowserAnimationsModule,
        TableModule,
        // InputTextModule,
        // ButtonModule,
        // ConfirmDialogModule
    ],
    declarations: [
        AppComponent,
        HomeComponent,
        LoginComponent,
        AdminComponent,
        DashboardComponent,
        RegisterComponent,
        AlertComponent
    ],
    providers: [
        { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
        { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
    ],
    bootstrap: [AppComponent]
})
export class AppModule { };