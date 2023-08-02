import { Component, EventEmitter, Input, Output } from '@angular/core';
import { User } from 'src/app/models/user.interface';

@Component({
  selector: 'app-user-card-component',
  templateUrl: './user-card-component.component.html',
  styleUrls: ['./user-card-component.component.scss']
})
export class UserCardComponentComponent {
  @Input() user!: User;
  @Output() deleteUser = new EventEmitter<User>();

  changeActivate(): void {
    this.user.activated = !this.user.activated;
  }

  delete(): void {
      this.deleteUser.emit(this.user);
    }
}
