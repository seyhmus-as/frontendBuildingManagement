import { Component, OnInit } from '@angular/core';
import { UserOperationClaim } from 'src/app/models/userOperationClaim';
import { UserOperationClaimService } from 'src/app/services/user-operation-claim.service';
@Component({
  selector: 'app-user-operation-claim',
  templateUrl: './user-operation-claim.component.html',
  styleUrls: ['./user-operation-claim.component.css']
})
export class UserOperationClaimComponent implements OnInit {
  userOperationClaims: UserOperationClaim[] = [];
  dataLoaded = false;
	filterText = "";

  constructor(private userOperationClaimService: UserOperationClaimService) { }

  ngOnInit(): void {
    this.getUserOperationClaims();
  }

  getUserOperationClaims() {
    this.userOperationClaimService.getUserOperationClaims().subscribe(response => {
      this.userOperationClaims = response.data;
      this.dataLoaded = true;
    })
  }
}
