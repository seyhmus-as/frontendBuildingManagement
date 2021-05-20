import { Component, OnInit } from '@angular/core';
import { Claim } from 'src/app/models/claim';
import { ClaimService } from 'src/app/services/claim.service';

@Component({
  selector: 'app-claim',
  templateUrl: './claim.component.html',
  styleUrls: ['./claim.component.css']
})
export class ClaimComponent implements OnInit {
  claims: Claim[] = [];
  dataLoaded = false;
	filterText = "";

  constructor(private claimService: ClaimService) { }

  ngOnInit(): void {
    this.getClaims();
  }

  getClaims() {
    this.claimService.getClaims().subscribe(response => {
      this.claims = response.data;
      this.dataLoaded = true;
    })
  }
}
