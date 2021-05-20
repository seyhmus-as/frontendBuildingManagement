import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { CardHistory } from 'src/app/models/cardHistory';
import { CardHistoryService } from 'src/app/services/card-history.service';

@Component({
  selector: 'app-card-history-getbyid',
  templateUrl: './card-history-getbyid.component.html',
  styleUrls: ['./card-history-getbyid.component.css']
})
export class CardHistoryGetbyidComponent implements OnInit {
  cardHistories: CardHistory[] = [];
  viewedId?: number;
  dataLoaded = false;
  dataViewed = false;

  item1?: string
  item2?: string
  item3?: string
  item4?: string
  item5?: string

  constructor(
    private cardHistoryService: CardHistoryService,
    private toastrService: ToastrService
  ) { }

  ngOnInit(): void {
  }

  getCardHistoryById() {
    if (this.viewedId == null) {
      this.toastrService.error("number girmediniz");
      return;
    }
    this.dataViewed = true;
    this.cardHistoryService.getCardHistoriesById(this.viewedId).subscribe(response => {
      this.cardHistories = response.data;
      this.dataLoaded = true;
    })
  }
}
