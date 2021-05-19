import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApartmentGetbyidComponent } from './apartment-getbyid.component';

describe('ApartmentGetbyidComponent', () => {
  let component: ApartmentGetbyidComponent;
  let fixture: ComponentFixture<ApartmentGetbyidComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ApartmentGetbyidComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ApartmentGetbyidComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
