import { Component, OnInit } from '@angular/core';
import { CardHistory } from 'src/app/models/cardHistory';
import { CardHistoryService } from 'src/app/services/card-history.service';

@Component({
  selector: 'app-card-history',
  templateUrl: './card-history.component.html',
  styleUrls: ['./card-history.component.css']
})
export class CardHistoryComponent implements OnInit {
  cardHistories: CardHistory[] = [];
  dataLoaded = false;
	filterText = "";

  constructor(private cardHistoryService: CardHistoryService) { }

  ngOnInit(): void {
    this.getCardHistories();
  }

  getCardHistories() {
    this.cardHistoryService.getCardHistories().subscribe(response => {
      this.cardHistories = response.data;
      this.dataLoaded = true;
    })
  }
}
