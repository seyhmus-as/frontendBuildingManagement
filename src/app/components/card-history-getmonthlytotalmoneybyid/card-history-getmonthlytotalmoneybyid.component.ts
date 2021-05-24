import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { CardHistoryService } from 'src/app/services/card-history.service';
@Component({
  selector: 'app-card-history-getmonthlytotalmoneybyid',
  templateUrl: './card-history-getmonthlytotalmoneybyid.component.html',
  styleUrls: ['./card-history-getmonthlytotalmoneybyid.component.css']
})
export class CardHistoryGetmonthlytotalmoneybyidComponent implements OnInit {

  totalMoney?: number;

  flatId?: number;
  secondBegin?: number;
  secondFinal?: number;
  isIncome?: boolean;

  dataLoaded = false;
  dataViewed = false;


  item1?: string

  constructor(
    private cardHistoryService: CardHistoryService,
    private toastrService: ToastrService
  ) { }

  ngOnInit(): void {
  }

  getMonthlyTotalMoneyById() {
    if (this.flatId == null ||
      this.secondBegin == null ||
      this.secondFinal == null ||
      this.isIncome == null
    ) { this.toastrService.error("Missing Form","Warning"); return; }

    this.dataViewed = true;
    this.cardHistoryService.getMonthlyTotalMoneyById(
      this.flatId,
      this.secondBegin,
      this.secondFinal,
      this.isIncome
    ).subscribe(response => {
      this.totalMoney = response.data;
      this.dataLoaded = true;

      this.item1 = String(this.totalMoney);
    })
  }
}
