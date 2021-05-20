import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Flat } from 'src/app/models/flat';
import { FlatService } from 'src/app/services/flat.service';

@Component({
  selector: 'app-flat-getbyid',
  templateUrl: './flat-getbyid.component.html',
  styleUrls: ['./flat-getbyid.component.css']
})
export class FlatGetbyidComponent implements OnInit {
  flat: Flat;
  viewedId?: number;
  dataLoaded = false;
  dataViewed = false;

  item1?: string
  item2?: string
  item3?: string
  item4?: string

  constructor(
    private flatService: FlatService,
    private toastrService: ToastrService
  ) { }

  ngOnInit(): void {
  }

  getFlatById() {
    if (this.viewedId == null) {
      this.toastrService.error("number girmediniz");
      return;
    }
    this.dataViewed = true;
    this.flatService.getFlatById(this.viewedId).subscribe(response => {
      this.flat = response.data;
      this.dataLoaded = true;

      this.item1=String(this.flat.flatId);
      this.item2=String(this.flat.apartmentId);
      this.item3=String(this.flat.priceOfRent);
      this.item4=String(this.flat.renterId);
    })
  }
}