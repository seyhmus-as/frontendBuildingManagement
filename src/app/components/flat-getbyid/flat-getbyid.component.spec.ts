import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FlatGetbyidComponent } from './flat-getbyid.component';

describe('FlatGetbyidComponent', () => {
  let component: FlatGetbyidComponent;
  let fixture: ComponentFixture<FlatGetbyidComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FlatGetbyidComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FlatGetbyidComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
