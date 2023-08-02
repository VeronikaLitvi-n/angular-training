import { Component, Input } from '@angular/core';
import { User } from 'src/app/models/user.interface';

@Component({
  selector: 'app-use-list-view-component',
  templateUrl: './use-list-view-component.component.html',
  styleUrls: ['./use-list-view-component.component.scss']
})
export class UseListViewComponentComponent {
  @Input() users: User[] = [];

  showOnlyActiveItems: boolean = false;

  deleteUser(): void {
    this.users.splice(0, 1)
  }
}
