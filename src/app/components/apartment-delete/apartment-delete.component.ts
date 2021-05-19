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

	deletedId?: number
	params? : HttpParams;
	
	constructor(
		private formBuilder: FormBuilder,
		private apartmentService: ApartmentService,
		private toastrService: ToastrService
	) { }

	ngOnInit(): void {
	}

	delete() {
		this.params = new HttpParams().set("id",String(this.deletedId));
		this.apartmentService.delete(this.params).subscribe(response => {
			this.toastrService.success(response.message, "Başarılı")
		}, responseError => {
			this.toastrService.error(responseError.error, "Doğrulama hatası")
		})
	}
}
