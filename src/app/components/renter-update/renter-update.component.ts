import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from "@angular/forms"
import { ToastrService } from 'ngx-toastr';
import { RenterService } from 'src/app/services/renter.service';

@Component({
  selector: 'app-renter-update',
  templateUrl: './renter-update.component.html',
  styleUrls: ['./renter-update.component.css']
})
export class RenterUpdateComponent implements OnInit {

	renterUpdateForm!: FormGroup;

	constructor(
		private formBuilder: FormBuilder,
		private renterService: RenterService,
		private toastrService: ToastrService
	) { }

	ngOnInit(): void {
		this.createRenterUpdateForm();
	}
	createRenterUpdateForm() {
		
		this.renterUpdateForm = this.formBuilder.group({
			renterId: ["", Validators.required],
			firstName: ["", Validators.required],
			lastName: ["", Validators.required],
		})
	}

	update() {
		if (this.renterUpdateForm.valid) {
			let renterModel = Object.assign({}, this.renterUpdateForm.value)
			this.renterService.update(renterModel).subscribe(response => {
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
