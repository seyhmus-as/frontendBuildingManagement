import { Component, OnInit } from '@angular/core';
import { Card } from 'src/app/models/card';
import { ToastrService } from 'ngx-toastr';
import { CardService } from 'src/app/services/card.service';

@Component({
  selector: 'app-card-getbyid',
  templateUrl: './card-getbyid.component.html',
  styleUrls: ['./card-getbyid.component.css']
})
export class CardGetbyidComponent implements OnInit {
  card?: Card;
  viewedId?: number;
  dataLoaded = false;
  dataViewed = false;

  constructor(
    private cardService: CardService,
    private toastrService: ToastrService
  ) { }

  ngOnInit(): void {
  }

  getCardsById() {
    if (this.viewedId == null) {
      this.toastrService.error("Missing Form","Warning");
      return;
    }
    this.dataViewed = true;
    this.cardService.getCardById(this.viewedId).subscribe(response => {
      this.card = response.data;
      this.dataLoaded = true;
    })
  }
}
