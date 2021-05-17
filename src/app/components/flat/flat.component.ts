import { Component, OnInit } from '@angular/core';
import { Flat } from 'src/app/models/flat';
import { FlatService } from 'src/app/services/flat.service';
@Component({
  selector: 'app-flat',
  templateUrl: './flat.component.html',
  styleUrls: ['./flat.component.css']
})
export class FlatComponent implements OnInit {
  flats: Flat[] = [];
  dataLoaded = false;
  filterText = "";

  constructor(private flatService: FlatService) { }

  ngOnInit(): void {
    this.getFlats();
  }

  getFlats() {
    this.flatService.getFlats().subscribe(response => {
      this.flats = response.data;
      this.dataLoaded = true;
    })
  }
}
