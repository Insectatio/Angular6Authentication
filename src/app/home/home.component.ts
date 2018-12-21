import { Component, OnInit } from '@angular/core';
import { first } from 'rxjs/operators';
import { User } from '../_models/user';
import { UserService } from '../_services/user.service';

@Component({templateUrl: 'home.component.html'})

export class HomeComponent implements OnInit {
    users: User[] = [];

    constructor(private userService: UserService) { }

    ngOnInit() {
        this.userService.getAll().pipe(first()).subscribe(users => {
            this.users = users;
        })
    }
}