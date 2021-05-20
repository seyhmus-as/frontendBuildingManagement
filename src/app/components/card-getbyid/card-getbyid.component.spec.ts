import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardGetbyidComponent } from './card-getbyid.component';

describe('CardGetbyidComponent', () => {
  let component: CardGetbyidComponent;
  let fixture: ComponentFixture<CardGetbyidComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardGetbyidComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CardGetbyidComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
