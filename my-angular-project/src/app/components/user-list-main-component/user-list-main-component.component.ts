import { Component } from '@angular/core';
import { users } from 'src/app/mocks/users-list';
import { User } from 'src/app/models/user.interface';

@Component({
  selector: 'app-user-list-main-component',
  templateUrl: './user-list-main-component.component.html',
  styleUrls: ['./user-list-main-component.component.scss']
})
export class UserListMainComponentComponent {
  users: User[] = [];

  constructor() {
    this.users = users;
  }
}
