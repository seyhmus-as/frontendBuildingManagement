import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from "@angular/forms"
import { ToastrService } from 'ngx-toastr';
import { ApartmentService } from 'src/app/services/apartment.service';
import { HttpClient, HttpParams } from '@angular/common/http';

@Component({
	selector: 'app-apartment-delete',
	templateUrl: './apartment-delete.component.html',
	styleUrls: ['./apartment-delete.component.css']
})

export class ApartmentDeleteComponent implements OnInit {

	deletedId: number
	params : HttpParams;
	
	constructor(
		private formBuilder: FormBuilder,
		private apartmentService: ApartmentService,
		private toastrService: ToastrService
	) { }

	ngOnInit(): void {
		this.createApartmentDeleteForm();
	}
	createApartmentDeleteForm() {
	}

	delete() {
		console.log(this.deletedId);
		this.params = new HttpParams().set("id",this.deletedId);
		this.apartmentService.delete(this.params).subscribe(response => {
			this.toastrService.success(response.message, "Başarılı")
		}, responseError => {
			if (responseError.error.Errors.length > 0) {
				for (let i = 0; i < responseError.error.Errors.length; i++) {
					this.toastrService.error(responseError.error.Errors[i].ErrorMessage, "Doğrulama hatası")
				}
			}
		})
	}
}
