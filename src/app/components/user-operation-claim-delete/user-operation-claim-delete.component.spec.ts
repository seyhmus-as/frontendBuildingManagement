import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserOperationClaimDeleteComponent } from './user-operation-claim-delete.component';

describe('UserOperationClaimDeleteComponent', () => {
  let component: UserOperationClaimDeleteComponent;
  let fixture: ComponentFixture<UserOperationClaimDeleteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserOperationClaimDeleteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserOperationClaimDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
