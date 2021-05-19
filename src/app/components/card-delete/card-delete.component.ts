import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { CardService } from 'src/app/services/card.service';
@Component({
	selector: 'app-card-delete',
	templateUrl: './card-delete.component.html',
	styleUrls: ['./card-delete.component.css']
})

export class CardDeleteComponent implements OnInit {

	deletedId?: number

	constructor(
		private cardService: CardService,
		private toastrService: ToastrService
	) { }

	ngOnInit(): void {
	}

	delete() {
		if (this.deletedId == null) {
			this.toastrService.error("number girmediniz");
			return;
		}
		this.cardService.delete(this.deletedId).subscribe(response => {
			this.toastrService.success(response.message, "Başarılı")
		}, responseError => {
			this.toastrService.error(responseError.error, "Doğrulama hatası")
		})
	}
}

