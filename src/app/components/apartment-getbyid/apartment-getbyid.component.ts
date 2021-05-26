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
  viewedId?: number;
  dataLoaded = false;
  dataViewed = false;

  constructor(
    private apartmentService: ApartmentService,
    private toastrService: ToastrService
  ) { }

  ngOnInit(): void {
  }

  getApartmentsById() {
    if (this.viewedId == null) {
      this.toastrService.error("Missing Form","Warning");
      return;
    }
    this.dataViewed = true;
    this.apartmentService.getApartmentsById(this.viewedId).subscribe(response => {
      this.apartment = response.data;
      this.dataLoaded = true;
    })
  }
}