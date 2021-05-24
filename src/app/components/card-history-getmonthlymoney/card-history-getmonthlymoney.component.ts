import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { CardHistoryService } from 'src/app/services/card-history.service';

@Component({
  selector: 'app-card-history-getmonthlymoney',
  templateUrl: './card-history-getmonthlymoney.component.html',
  styleUrls: ['./card-history-getmonthlymoney.component.css']
})
export class CardHistoryGetmonthlymoneyComponent implements OnInit {

  totalMoney?: number;

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

  getMonthlyMoney() {
    if (this.secondBegin == null  ||
        this.secondFinal == null    ||
        this.isIncome == null
    ) { this.toastrService.error("Missing Form", "Warning"); return; }

    this.dataViewed = true;
    this.cardHistoryService.getMonthlyMoney(this.secondBegin,this.secondFinal,this.isIncome)
        .subscribe(response => {
        this.totalMoney = response.data;
        this.dataLoaded = true;
        this.item1 = String(this.totalMoney);
        })
  }
}