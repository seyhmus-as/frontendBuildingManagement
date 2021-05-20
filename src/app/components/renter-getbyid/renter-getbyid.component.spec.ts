import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RenterGetbyidComponent } from './renter-getbyid.component';

describe('RenterGetbyidComponent', () => {
  let component: RenterGetbyidComponent;
  let fixture: ComponentFixture<RenterGetbyidComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RenterGetbyidComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RenterGetbyidComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
