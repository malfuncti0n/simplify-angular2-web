import { Component, OnInit } from '@angular/core';

import { UserModel } from '../userModel';
import { HttpService } from '../_services/index';

@Component({
    moduleId: module.id,
    templateUrl: 'home.component.html'
})

export class HomeComponent implements OnInit {
    currentUser: UserModel;
    users: UserModel[] = [];

    constructor(private httpService: HttpService) {
        this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
    }

    ngOnInit() {
        this.loadAllUsers();
    }

    deleteUser(id: string) {
        this.httpService.deleteUser(id).subscribe(() => { this.loadAllUsers() });
    }

    private loadAllUsers() {
        this.httpService.getAllUser().subscribe(users => { this.users = users; });
    }
}
