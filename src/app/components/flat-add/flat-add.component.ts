import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from "@angular/forms"
import { ToastrService } from 'ngx-toastr';
import { FlatService } from 'src/app/services/flat.service';

@Component({
  selector: 'app-flat-add',
  templateUrl: './flat-add.component.html',
  styleUrls: ['./flat-add.component.css']
})

export class FlatAddComponent implements OnInit {

	flatAddForm!: FormGroup;

	constructor(
		private formBuilder: FormBuilder,
		private flatService: FlatService,
		private toastrService: ToastrService
	) { }

	ngOnInit(): void {
		this.createFlatAddForm();
	}

	createFlatAddForm() {
		this.flatAddForm = this.formBuilder.group({
			id: ["0", Validators.required],
			flatId: ["", Validators.required],
			apartmentId: ["", Validators.required],
			priceOfRent: ["", Validators.required],
			renterId: ["", Validators.required]
		})
	}

	add() {
		if (this.flatAddForm.valid) {
			let flatModel = Object.assign({}, this.flatAddForm.value)
			this.flatService.add(flatModel).subscribe(response => {
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