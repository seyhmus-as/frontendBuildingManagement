import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardHistoryGetbyidComponent } from './card-history-getbyid.component';

describe('CardHistoryGetbyidComponent', () => {
  let component: CardHistoryGetbyidComponent;
  let fixture: ComponentFixture<CardHistoryGetbyidComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardHistoryGetbyidComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CardHistoryGetbyidComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
