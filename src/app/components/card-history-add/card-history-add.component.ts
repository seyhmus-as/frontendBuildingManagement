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