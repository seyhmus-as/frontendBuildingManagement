import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { CardHistoryDetail } from 'src/app/models/cardHistoryDetail';
import { CardHistoryService } from 'src/app/services/card-history.service';

@Component({
  selector: 'app-card-history-getmonthlymoneybyid',
  templateUrl: './card-history-getmonthlymoneybyid.component.html',
  styleUrls: ['./card-history-getmonthlymoneybyid.component.css']
})
export class CardHistoryGetmonthlymoneybyidComponent implements OnInit {

  cardHistoryDetails?: CardHistoryDetail[]=[];
  flatId?: number;
  secondBegin?: number;
  secondFinal?: number;
  isIncome?: boolean;

  dataLoaded = false;
  dataViewed = false;


  item1?: string
  item2?: string
  item3?: string
  item4?: string

  constructor(
    private cardHistoryService: CardHistoryService,
    private toastrService: ToastrService
  ) { }

  ngOnInit(): void {
  }

  getMonthlyMoney() {
    if (this.secondBegin == null ||
      this.secondFinal == null ||
      this.flatId == null ||
      this.isIncome == null
    ) { this.toastrService.error("form eksik"); return; }

    this.dataViewed = true;
    this.cardHistoryService.getMonthlyMoneyById(
      this.flatId,
      this.secondBegin,
      this.secondFinal,
      this.isIncome,
    ).subscribe(response => {
      this.cardHistoryDetails = response.data;
      this.dataLoaded = true;
    })
  }
}