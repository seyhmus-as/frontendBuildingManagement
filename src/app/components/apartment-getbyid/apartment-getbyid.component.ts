import { Component, OnInit } from '@angular/core';
import { Apartment } from 'src/app/models/apartment';
import { ToastrService } from 'ngx-toastr';
import { ApartmentService } from 'src/app/services/apartment.service';

@Component({
  selector: 'app-apartment-getbyid',
  templateUrl: './apartment-getbyid.component.html',
  styleUrls: ['./apartment-getbyid.component.css']
})
export class ApartmentGetbyidComponent implements OnInit {
  apartment?: Apartment;
  viewedId?:number;
  dataLoaded = false;
  dataViewed = false;
  

  item1?:string
  item2?:string
  item3?:string
  item4?:string

  constructor(
    private apartmentService: ApartmentService,
    private toastrService:ToastrService
    ) { }

  ngOnInit(): void {
  }

  getApartmentsById() {
		if (this.viewedId == null) {
			this.toastrService.error("number girmediniz");
			return;
		}
    this.dataViewed = true;
    this.apartmentService.getApartmentsById(this.viewedId).subscribe(response => {
      this.apartment = response.data;
      this.dataLoaded = true;
      
  this.item1=String(this.apartment.apartmentName);
  this.item2=String(this.apartment.apartmentId);
  this.item3=String(this.apartment.numberOfFlat);
  this.item4=String(this.apartment.numberOfFloor);
    })
  }
}