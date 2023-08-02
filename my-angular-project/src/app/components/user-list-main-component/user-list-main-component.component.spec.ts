import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserListMainComponentComponent } from './user-list-main-component.component';

describe('UserListMainComponentComponent', () => {
  let component: UserListMainComponentComponent;
  let fixture: ComponentFixture<UserListMainComponentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UserListMainComponentComponent]
    });
    fixture = TestBed.createComponent(UserListMainComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
