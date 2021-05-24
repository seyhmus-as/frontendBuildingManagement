import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardHistoryGetmonthlymoneyComponent } from './card-history-getmonthlymoney.component';

describe('CardHistoryGetmonthlymoneyComponent', () => {
  let component: CardHistoryGetmonthlymoneyComponent;
  let fixture: ComponentFixture<CardHistoryGetmonthlymoneyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardHistoryGetmonthlymoneyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CardHistoryGetmonthlymoneyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
