import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FlatGetdetailsComponent } from './flat-getdetails.component';

describe('FlatGetdetailsComponent', () => {
  let component: FlatGetdetailsComponent;
  let fixture: ComponentFixture<FlatGetdetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FlatGetdetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FlatGetdetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
