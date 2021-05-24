import { Component, OnInit } from '@angular/core';
import { CardHistoryDetail } from 'src/app/models/cardHistoryDetail';
import { CardHistoryService } from 'src/app/services/card-history.service';

@Component({
  selector: 'app-card-history-details',
  templateUrl: './card-history-details.component.html',
  styleUrls: ['./card-history-details.component.css']
})
export class CardHistoryDetailsComponent implements OnInit {
  cardHistoryDetails: CardHistoryDetail[] = [];
  dataLoaded = false;
  filterText = "";

  constructor(private cardHistoryService: CardHistoryService) { }

  ngOnInit(): void {
    this.getCardHistoryDetails();
  }

  getCardHistoryDetails() {
    this.cardHistoryService.getCardHistoryDetails().subscribe(response => {
      this.cardHistoryDetails = response.data;
      this.dataLoaded = true;
    })
  }
}
