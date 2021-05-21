import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { ClaimService } from 'src/app/services/claim.service';

@Component({
  selector: 'app-claim-delete',
  templateUrl: './claim-delete.component.html',
  styleUrls: ['./claim-delete.component.css']
})
export class ClaimDeleteComponent implements OnInit {

	deletedId?: number

	constructor(
		private claimService: ClaimService,
		private toastrService: ToastrService
	) { }

	ngOnInit(): void {
	}
  delete() {
    if (this.deletedId == null) {
      this.toastrService.error("number girmediniz");
      return;
    }
    this.claimService.delete(this.deletedId).subscribe(response => {
      this.toastrService.success(response.message, "Başarılı")
    }, responseError => {
      this.toastrService.error(responseError.error, "Doğrulama hatası")
    })
  }
}
