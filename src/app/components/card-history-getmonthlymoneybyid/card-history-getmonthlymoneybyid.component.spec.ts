import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardHistoryGetmonthlymoneybyidComponent } from './card-history-getmonthlymoneybyid.component';

describe('CardHistoryGetmonthlymoneybyidComponent', () => {
  let component: CardHistoryGetmonthlymoneybyidComponent;
  let fixture: ComponentFixture<CardHistoryGetmonthlymoneybyidComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardHistoryGetmonthlymoneybyidComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CardHistoryGetmonthlymoneybyidComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
