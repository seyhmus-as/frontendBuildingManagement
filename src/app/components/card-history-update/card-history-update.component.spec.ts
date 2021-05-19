import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardHistoryUpdateComponent } from './card-history-update.component';

describe('CardHistoryUpdateComponent', () => {
  let component: CardHistoryUpdateComponent;
  let fixture: ComponentFixture<CardHistoryUpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardHistoryUpdateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CardHistoryUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
