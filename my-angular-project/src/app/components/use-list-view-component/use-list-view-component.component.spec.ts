import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UseListViewComponentComponent } from './use-list-view-component.component';

describe('UseListViewComponentComponent', () => {
  let component: UseListViewComponentComponent;
  let fixture: ComponentFixture<UseListViewComponentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UseListViewComponentComponent]
    });
    fixture = TestBed.createComponent(UseListViewComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
