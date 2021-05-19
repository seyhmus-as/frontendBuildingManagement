import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RenterUpdateComponent } from './renter-update.component';

describe('RenterUpdateComponent', () => {
  let component: RenterUpdateComponent;
  let fixture: ComponentFixture<RenterUpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RenterUpdateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RenterUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
