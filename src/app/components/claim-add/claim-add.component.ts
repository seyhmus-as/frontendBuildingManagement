import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from "@angular/forms"
import { ToastrService } from 'ngx-toastr';
import { ClaimService } from 'src/app/services/claim.service';

@Component({
  selector: 'app-claim-add',
  templateUrl: './claim-add.component.html',
  styleUrls: ['./claim-add.component.css']
})

export class ClaimAddComponent implements OnInit {

	operationClaimAddForm!: FormGroup;

	constructor(
		private formBuilder: FormBuilder,
		private claimService: ClaimService,
		private toastrService: ToastrService
	) { }

	ngOnInit(): void {
		this.createFlatAddForm();
	}

	createFlatAddForm() {
		this.operationClaimAddForm = this.formBuilder.group({
			operationClaimId: ["0", Validators.required],
			name: ["", Validators.required]
		})
	}

	add() {
		if (this.operationClaimAddForm.valid) {
			let operationClaimModel = Object.assign({}, this.operationClaimAddForm.value)
			this.claimService.addClaim(operationClaimModel).subscribe(response => {
				this.toastrService.success(response.message, "Başarılı")
			}, responseError => {
				if (responseError.error.Errors.length > 0) {
					for (let i = 0; i < responseError.error.Errors.length; i++) {
						this.toastrService.error(responseError.error.Errors[i].ErrorMessage, "Doğrulama hatası")
					}
				}
			})
		} else {
			this.toastrService.error("form eksik", "dikkat");
		}
	}
}
