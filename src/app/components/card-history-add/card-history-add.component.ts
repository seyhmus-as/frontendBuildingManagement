import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from "@angular/forms"
import { ToastrService } from 'ngx-toastr';
import { CardHistoryService } from 'src/app/services/card-history.service';

@Component({
  selector: 'app-card-history-add',
  templateUrl: './card-history-add.component.html',
  styleUrls: ['./card-history-add.component.css']
})

export class CardHistoryAddComponent implements OnInit {

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
			id: ["0", Validators.required],
			cardId: ["", Validators.required],
			flatId: ["", Validators.required],
			date: ["", Validators.required],
			price: ["", Validators.required]
		})
	}

	add() {
		if (this.cardHistoryAddForm.valid) {
			let cardHistoryModel = Object.assign({}, this.cardHistoryAddForm.value)
			this.cardHistoryService.add(cardHistoryModel).subscribe(response => {
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


/*
@Component({
  selector: 'app-card-add',
  templateUrl: './card-add.component.html',
  styleUrls: ['./card-add.component.css']
})

export class CardAddComponent implements OnInit {

	cardAddForm!: FormGroup;

	constructor(
		private formBuilder: FormBuilder,
		private cardService: CardService,
		private toastrService: ToastrService
	) { }

	ngOnInit(): void {
		this.createCardAddForm();
	}

	createCardAddForm() {
		this.cardAddForm = this.formBuilder.group({
			Name: ["", Validators.required],
			cardId: ["", Validators.required],
			isIncome: ["", Validators.required]	
		})
	}

	add() {
		if (this.cardAddForm.valid) {
			let cardModel = Object.assign({}, this.cardAddForm.value)
			this.cardService.add(cardModel).subscribe(response => {
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
*/