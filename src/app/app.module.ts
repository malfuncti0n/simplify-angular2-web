/*
* Angular 2 CRUD application using Nodejs
* @autthor Shashank Tiwari
*/

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';



//get-post-put-delete directives
import { AppComponent } from './app.component';
import { UserListComponent } from './user-list/user-list.component';
import { AddUserComponent } from './add-user/add-user.component';
import { EmitterService } from './_services/emitter.service';


//// used to create fake backend
import { fakeBackendProvider } from './_helpers/fake-backend';
import { MockBackend, MockConnection } from '@angular/http/testing';
import { BaseRequestOptions } from '@angular/http';


//login-register directives
import { routing } from './app.routing';
import { AlertComponent } from './_directives/alert.component';
import { AuthGuard } from './_guards/auth.guard';
import { AlertService, AuthenticationService, HttpService } from './_services/index';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';


@NgModule({
    declarations:[
        AppComponent,
        UserListComponent,
        AddUserComponent,
        AlertComponent,
        HomeComponent,
        LoginComponent,
        RegisterComponent
    ],
    imports:[ BrowserModule,FormsModule,HttpModule,routing ],
    providers: [
        EmitterService,
        AuthGuard,
        AlertService,
        AuthenticationService,
        HttpService,
    ],
    bootstrap: [ AppComponent ]
})
export class AppModule { }
