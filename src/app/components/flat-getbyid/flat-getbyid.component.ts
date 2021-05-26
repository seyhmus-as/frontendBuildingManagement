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
  flats: Flat[]=[];
  viewedId?: number;
  dataLoaded = false;
  dataViewed = false;

  constructor(
    private flatService: FlatService,
    private toastrService: ToastrService
  ) { }

  ngOnInit(): void {
  }

  getFlatById() {
    if (this.viewedId == null) {
      this.toastrService.error("Missing Form","Warning");
      return;
    }
    this.dataViewed = true;
    this.flatService.getFlatById(this.viewedId).subscribe(response => {
      this.flats = response.data;
      this.dataLoaded = true;
    })
  }
}