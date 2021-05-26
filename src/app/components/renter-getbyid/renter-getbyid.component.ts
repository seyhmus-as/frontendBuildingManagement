import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Renter } from 'src/app/models/renter';
import { RenterService } from 'src/app/services/renter.service';

@Component({
  selector: 'app-renter-getbyid',
  templateUrl: './renter-getbyid.component.html',
  styleUrls: ['./renter-getbyid.component.css']
})
export class RenterGetbyidComponent implements OnInit {
  renter: Renter;
  viewedId?: number;
  dataLoaded = false;
  dataViewed = false;

  constructor(
    private renterService: RenterService,
    private toastrService: ToastrService
  ) { }

  ngOnInit(): void {
  }

  getRenterById() {
    if (this.viewedId == null) {
      this.toastrService.error("Missing Form","Warning");
      return;
    }
    this.dataViewed = true;
    this.renterService.getRenterById(this.viewedId).subscribe(response => {
      this.renter = response.data;
      this.dataLoaded = true;
    })
  }
}