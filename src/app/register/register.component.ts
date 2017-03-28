import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { AlertService, HttpService } from '../_services/index';

import { UserModel } from '../userModel';

@Component({
    moduleId: module.id,
    templateUrl: 'register.component.html'
})

export class RegisterComponent {
    model: any = {};
    loading = false;

    constructor(
        private router: Router,
        private httpService: HttpService,
        private alertService: AlertService) { }
    	private userModel:UserModel = new UserModel('','','','','','','','');

    register() {
        this.loading = true;
        this.httpService.addUser(this.userModel)
            .subscribe(
                data => {
                    this.alertService.success('Registration successful', true);
                    this.router.navigate(['/login']);
                },
                error => {
                    this.alertService.error(error);
                    this.loading = false;
                });
    }
}
