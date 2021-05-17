import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardHistoryAddComponent } from './card-history-add.component';

describe('CardHistoryAddComponent', () => {
  let component: CardHistoryAddComponent;
  let fixture: ComponentFixture<CardHistoryAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardHistoryAddComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CardHistoryAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
