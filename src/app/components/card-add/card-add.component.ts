import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from "@angular/forms"
import { ToastrService } from 'ngx-toastr';
import { ApartmentService } from 'src/app/services/apartment.service';

@Component({
  selector: 'app-card-add',
  templateUrl: './card-add.component.html',
  styleUrls: ['./card-add.component.css']
})

export class CardAddComponent implements OnInit {

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
			apartmentName: ["", Validators.required],
			apartmentId: ["", Validators.required],
			numberOfFlat: ["", Validators.required],
			numberOfFloor: ["", Validators.required]
		})
	}

	add() {
		if (this.apartmentAddForm.valid) {
			let apartmentModel = Object.assign({}, this.apartmentAddForm.value)
			this.apartmentService.add(apartmentModel).subscribe(response => {
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
