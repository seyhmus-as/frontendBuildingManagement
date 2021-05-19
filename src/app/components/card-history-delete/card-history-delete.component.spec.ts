import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardHistoryDeleteComponent } from './card-history-delete.component';

describe('CardHistoryDeleteComponent', () => {
  let component: CardHistoryDeleteComponent;
  let fixture: ComponentFixture<CardHistoryDeleteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardHistoryDeleteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CardHistoryDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
