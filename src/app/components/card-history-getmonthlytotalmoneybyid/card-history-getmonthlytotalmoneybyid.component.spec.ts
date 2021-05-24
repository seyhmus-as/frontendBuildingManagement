import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardHistoryGetmonthlytotalmoneybyidComponent } from './card-history-getmonthlytotalmoneybyid.component';

describe('CardHistoryGetmonthlytotalmoneybyidComponent', () => {
  let component: CardHistoryGetmonthlytotalmoneybyidComponent;
  let fixture: ComponentFixture<CardHistoryGetmonthlytotalmoneybyidComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardHistoryGetmonthlytotalmoneybyidComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CardHistoryGetmonthlytotalmoneybyidComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
