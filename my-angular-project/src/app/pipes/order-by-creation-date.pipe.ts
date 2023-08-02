import { Pipe, PipeTransform } from '@angular/core';
import { User } from '../models/user.interface';

@Pipe({
  name: 'orderByCreationDate'
})
export class OrderByCreationDatePipe implements PipeTransform {

  transform(users: User[]): User[] {
    return users.sort((a, b) => {
      const dateA = a.dateOfCreation;
      const dateB = b.dateOfCreation;
      return dateA.getTime() - dateB.getTime();
    });
  }
}
