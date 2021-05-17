import { Component, OnInit } from '@angular/core';
import { Card } from 'src/app/models/card';
import { CardService } from 'src/app/services/card.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  cards: Card[] = [];
  dataLoaded = false;
	filterText = "";

  constructor(private cardService: CardService) { }

  ngOnInit(): void {
    this.getCards();
  }

  getCards() {
    this.cardService.getCards().subscribe(response => {
      this.cards = response.data;
      this.dataLoaded = true;
    })
  }
}
