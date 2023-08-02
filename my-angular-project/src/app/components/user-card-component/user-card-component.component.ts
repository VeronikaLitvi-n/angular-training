import { Component, EventEmitter, Input, Output, OnInit, OnDestroy, ContentChild, TemplateRef } from '@angular/core';
import { User } from 'src/app/models/user.interface';

@Component({
  selector: 'app-user-card-component',
  templateUrl: './user-card-component.component.html',
  styleUrls: ['./user-card-component.component.scss']
})
export class UserCardComponentComponent implements OnInit, OnDestroy {
  @Input() user!: User;
  @ContentChild('userCardTitle') titleContent!: TemplateRef<any>;
  @Output() deleteUser = new EventEmitter<User>();

  ngOnInit(): void {
    console.log(`${this.user.lastName} was displayed!`);
  }

  ngOnDestroy(): void {
    console.log(`${this.user.lastName} was hidden!`);
  }

  changeActivate(): void {
    this.user.activated = !this.user.activated;
  }

  delete(): void {
    this.deleteUser.emit(this.user);
  }
}
