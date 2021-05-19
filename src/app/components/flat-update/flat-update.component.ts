import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from "@angular/forms"
import { ToastrService } from 'ngx-toastr';
import { FlatService } from 'src/app/services/flat.service';

@Component({
  selector: 'app-flat-update',
  templateUrl: './flat-update.component.html',
  styleUrls: ['./flat-update.component.css']
})

export class FlatUpdateComponent implements OnInit {

	flatUpdateForm!: FormGroup;

	constructor(
		private formBuilder: FormBuilder,
		private flatService: FlatService,
		private toastrService: ToastrService
	) { }

	ngOnInit(): void {
		this.createFlatUpdateForm();
	}
	createFlatUpdateForm() {
		
		this.flatUpdateForm = this.formBuilder.group({
			flatId: ["", Validators.required],
			apartmentId: ["", Validators.required],
			priceOfRent: ["", Validators.required],
			renterId: ["", Validators.required]
		})
	}

	update() {
		if (this.flatUpdateForm.valid) {
			let flatModel = Object.assign({}, this.flatUpdateForm.value)
			this.flatService.update(flatModel).subscribe(response => {
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