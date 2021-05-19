import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RenterDeleteComponent } from './renter-delete.component';

describe('RenterDeleteComponent', () => {
  let component: RenterDeleteComponent;
  let fixture: ComponentFixture<RenterDeleteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RenterDeleteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RenterDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
