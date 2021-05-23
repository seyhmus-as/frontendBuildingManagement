import { Component, OnInit } from '@angular/core';
import { Flat } from 'src/app/models/flat';
import { FlatDetail } from 'src/app/models/flatDetail';
import { FlatService } from 'src/app/services/flat.service';

@Component({
  selector: 'app-flat-getdetails',
  templateUrl: './flat-getdetails.component.html',
  styleUrls: ['./flat-getdetails.component.css']
})
export class FlatGetdetailsComponent implements OnInit {
  flatDetails: FlatDetail[] = [];
  dataLoaded = false;
  filterText = "";

  constructor(private flatService: FlatService) { }

  ngOnInit(): void {
    this.getFlatDetails();
  }

  getFlatDetails() {
    this.flatService.getFlatDetails().subscribe(response => {
      this.flatDetails = response.data;
      this.dataLoaded = true;
    })
  }
}
