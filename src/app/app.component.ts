/*
* Angular 2 CRUD application using Nodejs
* @autthor Shashank Tiwari
*/

import { Component } from '@angular/core';

import { UserListComponent } from './user-list/user-list.component';
import { AddUserComponent } from './add-user/add-user.component';

import { EmitterService } from './_services/emitter.service';


@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']
})


export class AppComponent {

	public title:string = 'Simplify Project';

	private userInfo = 'CRUD_USER_INFO';
    private reset = 'CRUD_RESET_FORM';
    private userList = 'CRUD_USER_LIST';

	constructor(private _emitterService: EmitterService) {}
}
