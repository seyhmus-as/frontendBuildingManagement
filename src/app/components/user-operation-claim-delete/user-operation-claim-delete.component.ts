import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { UserOperationClaimService } from 'src/app/services/user-operation-claim.service';
@Component({
  selector: 'app-user-operation-claim-delete',
  templateUrl: './user-operation-claim-delete.component.html',
  styleUrls: ['./user-operation-claim-delete.component.css']
})

export class UserOperationClaimDeleteComponent implements OnInit {

	deletedId?: number

	constructor(
		private userOperationClaimService: UserOperationClaimService,
		private toastrService: ToastrService
	) { }

	ngOnInit(): void {
	}

	delete() {
		if (this.deletedId == null) {
			this.toastrService.error("Missing Form","Warning");
			return;
		}
		this.userOperationClaimService.delete(this.deletedId).subscribe(response => {
			this.toastrService.success(response.message, "Success")
		}, responseError => {
			this.toastrService.error(responseError.error, "Validation Error")
		})
	}
}
