import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from "@angular/forms"
import { ToastrService } from 'ngx-toastr';
import { FlatService } from 'src/app/services/flat.service';
import { HttpClient, HttpParams } from '@angular/common/http';
@Component({
	selector: 'app-flat-delete',
	templateUrl: './flat-delete.component.html',
	styleUrls: ['./flat-delete.component.css']
})

export class FlatDeleteComponent implements OnInit {

	deletedId?: number
	params?: HttpParams;

	constructor(
		private formBuilder: FormBuilder,
		private flatService: FlatService,
		private toastrService: ToastrService
	) { }

	ngOnInit(): void {
	}

	delete() {
		this.params = new HttpParams().set("id", String(this.deletedId));
		this.flatService.delete(this.params).subscribe(response => {
			this.toastrService.success(response.message, "Başarılı")
		}, responseError => {
			this.toastrService.error(responseError.error, "Doğrulama hatası")
		})
	}
}
