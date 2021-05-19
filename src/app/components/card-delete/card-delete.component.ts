import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from "@angular/forms"
import { ToastrService } from 'ngx-toastr';
import { CardService } from 'src/app/services/card.service';
import { HttpClient, HttpParams } from '@angular/common/http';
@Component({
  selector: 'app-card-delete',
  templateUrl: './card-delete.component.html',
  styleUrls: ['./card-delete.component.css']
})

export class CardDeleteComponent implements OnInit {

	deletedId?: number
	params? : HttpParams;
	
	constructor(
		private formBuilder: FormBuilder,
		private cardService: CardService,
		private toastrService: ToastrService
	) { }

	ngOnInit(): void {
	}

	delete() {
		this.params = new HttpParams().set("id",String(this.deletedId));
		this.cardService.delete(this.params).subscribe(response => {
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

