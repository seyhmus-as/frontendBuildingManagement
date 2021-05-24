import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardHistoryDetailsComponent } from './card-history-details.component';

describe('CardHistoryDetailsComponent', () => {
  let component: CardHistoryDetailsComponent;
  let fixture: ComponentFixture<CardHistoryDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardHistoryDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CardHistoryDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
