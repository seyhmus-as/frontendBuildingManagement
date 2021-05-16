import { Component, OnInit } from '@angular/core';
import { Apartment } from 'src/app/models/apartment';
import { ApartmentService } from 'src/app/services/apartment.service';

@Component({
  selector: 'app-apartment',
  templateUrl: './apartment.component.html',
  styleUrls: ['./apartment.component.css']
})
export class ApartmentComponent implements OnInit {
  apartments: Apartment[] = [];
  dataLoaded = false;
	filterText = "";

  constructor(private apartmentService: ApartmentService) { }

  ngOnInit(): void {
    this.getApartments();
  }

  getApartments() {
    this.apartmentService.getApartments().subscribe(response => {
      this.apartments = response.data;
      this.dataLoaded = true;
    })
  }
}
