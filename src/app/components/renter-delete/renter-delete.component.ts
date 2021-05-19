import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from "@angular/forms"
import { ToastrService } from 'ngx-toastr';
import { RenterService } from 'src/app/services/renter.service';
import { HttpClient, HttpParams } from '@angular/common/http';
@Component({
	selector: 'app-renter-delete',
	templateUrl: './renter-delete.component.html',
	styleUrls: ['./renter-delete.component.css']
})

export class RenterDeleteComponent implements OnInit {

	deletedId?: number
	params?: HttpParams;

	constructor(
		private formBuilder: FormBuilder,
		private renterService: RenterService,
		private toastrService: ToastrService
	) { }

	ngOnInit(): void {
	}

	delete() {
		if (this.deletedId == null) {
			this.toastrService.error("number girmediniz");
			return;
		}
		this.params = new HttpParams().set("id", String(this.deletedId));
		this.renterService.delete(this.deletedId).subscribe(response => {
			this.toastrService.success(response.message, "Başarılı")
		}, responseError => {
			this.toastrService.error(responseError.error, "Doğrulama hatası")
		})
	}
}
