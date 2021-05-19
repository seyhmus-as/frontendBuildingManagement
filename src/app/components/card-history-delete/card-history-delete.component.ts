import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from "@angular/forms"
import { ToastrService } from 'ngx-toastr';
import { HttpClient, HttpParams } from '@angular/common/http';
import { CardHistoryService } from 'src/app/services/card-history.service';
@Component({
	selector: 'app-card-history-delete',
	templateUrl: './card-history-delete.component.html',
	styleUrls: ['./card-history-delete.component.css']
})

export class CardHistoryDeleteComponent implements OnInit {

	deletedId?: number
	params?: HttpParams;

	constructor(
		private cardService: CardHistoryService,
		private toastrService: ToastrService
	) { }

	ngOnInit(): void {
	}

	delete() {
		this.params = new HttpParams().set("id", String(this.deletedId));
		this.cardService.delete(this.params).subscribe(response => {
			this.toastrService.success(response.message, "Başarılı")
		}, responseError => {
			this.toastrService.error(responseError.error, "Doğrulama hatası")
		})
	}
}