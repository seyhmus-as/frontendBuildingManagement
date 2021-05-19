import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FlatDeleteComponent } from './flat-delete.component';

describe('FlatDeleteComponent', () => {
  let component: FlatDeleteComponent;
  let fixture: ComponentFixture<FlatDeleteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FlatDeleteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FlatDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
