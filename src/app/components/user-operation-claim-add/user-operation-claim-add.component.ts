import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from "@angular/forms"
import { ToastrService } from 'ngx-toastr';
import { UserOperationClaimService } from 'src/app/services/user-operation-claim.service';
@Component({
  selector: 'app-user-operation-claim-add',
  templateUrl: './user-operation-claim-add.component.html',
  styleUrls: ['./user-operation-claim-add.component.css']
})

export class UserOperationClaimAddComponent implements OnInit {

userOperationClaimAddForm!: FormGroup;

	constructor(
		private formBuilder: FormBuilder,
		private userOperationClaimService: UserOperationClaimService,
		private toastrService: ToastrService
	) { }

	ngOnInit(): void {
		this.createUserOperationClaimAddForm();
	}

	createUserOperationClaimAddForm() {
		this.userOperationClaimAddForm = this.formBuilder.group({
			id: ["0", Validators.required],
			userId: ["", Validators.required],
			operationClaimId: ["", Validators.required],
		})
	}

	add() {
		if (this.userOperationClaimAddForm.valid) {
			let userOperationClaimModel = Object.assign({}, this.userOperationClaimAddForm.value)
			this.userOperationClaimService.add(userOperationClaimModel).subscribe(response => {
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