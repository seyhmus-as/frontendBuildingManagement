import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FlatUpdateComponent } from './flat-update.component';

describe('FlatUpdateComponent', () => {
  let component: FlatUpdateComponent;
  let fixture: ComponentFixture<FlatUpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FlatUpdateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FlatUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
