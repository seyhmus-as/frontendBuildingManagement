import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserGetdetailsComponent } from './user-getdetails.component';

describe('UserGetdetailsComponent', () => {
  let component: UserGetdetailsComponent;
  let fixture: ComponentFixture<UserGetdetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserGetdetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserGetdetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
