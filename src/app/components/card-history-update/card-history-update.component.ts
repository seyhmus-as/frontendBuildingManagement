import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from "@angular/forms"
import { ToastrService } from 'ngx-toastr';
import { CardHistoryService } from 'src/app/services/card-history.service';

@Component({
  selector: 'app-card-history-update',
  templateUrl: './card-history-update.component.html',
  styleUrls: ['./card-history-update.component.css']
})

export class CardHistoryUpdateComponent implements OnInit {

	cardHistoryAddForm!: FormGroup;

	constructor(
		private formBuilder: FormBuilder,
		private cardHistoryService: CardHistoryService,
		private toastrService: ToastrService
	) { }

	ngOnInit(): void {
		this.createCardHistoryAddForm();
	}
	createCardHistoryAddForm() {
		
		this.cardHistoryAddForm = this.formBuilder.group({
			id: ["", Validators.required],
			cardId: ["", Validators.required],
			flatId: ["", Validators.required],
			date: ["", Validators.required],
			price: ["", Validators.required]
		})
	}

	update() {
		if (this.cardHistoryAddForm.valid) {
			let cardHistoryModel = Object.assign({}, this.cardHistoryAddForm.value)
			this.cardHistoryService.update(cardHistoryModel).subscribe(response => {
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