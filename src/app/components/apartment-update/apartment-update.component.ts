import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from "@angular/forms"
import { ToastrService } from 'ngx-toastr';
import { ApartmentService } from 'src/app/services/apartment.service';

@Component({
  selector: 'app-apartment-update',
  templateUrl: './apartment-update.component.html',
  styleUrls: ['./apartment-update.component.css']
})

export class ApartmentUpdateComponent implements OnInit {

	apartmentAddForm!: FormGroup;

	constructor(
		private formBuilder: FormBuilder,
		private apartmentService: ApartmentService,
		private toastrService: ToastrService
	) { }

	ngOnInit(): void {
		this.createApartmentAddForm();
	}

	createApartmentAddForm() {
		this.apartmentAddForm = this.formBuilder.group({
			Name: ["", Validators.required],
			Id: ["", Validators.required],
			numberOfFlat: ["", Validators.required],
			numberOfFloor: ["", Validators.required]
		})
	}

	update() {
		if (this.apartmentAddForm.valid) {
			let apartmentModel = Object.assign({}, this.apartmentAddForm.value)
			this.apartmentService.update(apartmentModel).subscribe(response => {
				this.toastrService.success(response.message, "Success")
			}, responseError => {
				if (responseError.error.Errors.length > 0) {
					for (let i = 0; i < responseError.error.Errors.length; i++) {
						this.toastrService.error(responseError.error.Errors[i].ErrorMessage, "Validation Error")
					}
				}
			})
		} else {
			this.toastrService.error("Missing Form","Warning");
		}
	}
}
