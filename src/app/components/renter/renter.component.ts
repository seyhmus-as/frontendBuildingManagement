import { Component, OnInit } from '@angular/core';
import { Renter } from 'src/app/models/renter';
import { RenterService } from 'src/app/services/renter.service';

@Component({
  selector: 'app-renter',
  templateUrl: './renter.component.html',
  styleUrls: ['./renter.component.css']
})
export class RenterComponent implements OnInit {
  renters: Renter[] = [];
  dataLoaded = false;
	filterText = "";

  constructor(private renterService: RenterService) { }

  ngOnInit(): void {
    this.getRenters();
  }

  getRenters() {
    this.renterService.getRenters().subscribe(response => {
      this.renters = response.data;
      this.dataLoaded = true;
    })
  }
}
