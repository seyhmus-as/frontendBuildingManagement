import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from "@angular/forms"
import { ToastrService } from 'ngx-toastr';
import { RenterService } from 'src/app/services/renter.service';

@Component({
  selector: 'app-renter-add',
  templateUrl: './renter-add.component.html',
  styleUrls: ['./renter-add.component.css']
})

export class RenterAddComponent implements OnInit {

	renterAddForm!: FormGroup;

	constructor(
		private formBuilder: FormBuilder,
		private renterService: RenterService,
		private toastrService: ToastrService
	) { }

	ngOnInit(): void {
		this.createRenterAddForm();
	}

	createRenterAddForm() {
		this.renterAddForm = this.formBuilder.group({
			renterId: ["0", Validators.required],
			firstName: ["", Validators.required],
			lastName: ["", Validators.required],
		})
	}

	add() {
		if (this.renterAddForm.valid) {
			let renterModel = Object.assign({}, this.renterAddForm.value)
			this.renterService.add(renterModel).subscribe(response => {
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