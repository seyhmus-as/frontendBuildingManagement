import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from "@angular/forms"
import { ToastrService } from 'ngx-toastr';
import { CardService } from 'src/app/services/card.service';

@Component({
  selector: 'app-card-update',
  templateUrl: './card-update.component.html',
  styleUrls: ['./card-update.component.css']
})

export class CardUpdateComponent implements OnInit {

	cardUpdateForm!: FormGroup;

	constructor(
		private formBuilder: FormBuilder,
		private cardService: CardService,
		private toastrService: ToastrService
	) { }

	ngOnInit(): void {
		this.createCardUpdateForm();
	}
	createCardUpdateForm() {
		
		this.cardUpdateForm = this.formBuilder.group({
			name: ["", Validators.required],
			cardId: ["", Validators.required],
			isIncome: ["", Validators.required]
		})
	}

	update() {
		if (this.cardUpdateForm.valid) {
			let cardModel = Object.assign({}, this.cardUpdateForm.value)
			this.cardService.update(cardModel).subscribe(response => {
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