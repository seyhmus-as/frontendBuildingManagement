import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { CardHistoryService } from 'src/app/services/card-history.service';
@Component({
	selector: 'app-card-history-delete',
	templateUrl: './card-history-delete.component.html',
	styleUrls: ['./card-history-delete.component.css']
})

export class CardHistoryDeleteComponent implements OnInit {

	deletedId?: number

	constructor(
		private cardService: CardHistoryService,
		private toastrService: ToastrService
	) { }

	ngOnInit(): void {
	}

	delete() {
		if (this.deletedId == null) {
			this.toastrService.error("Missing Form","Warning");
			return;
		}
		this.cardService.delete(this.deletedId).subscribe(response => {
			this.toastrService.success(response.message, "Success")
		}, responseError => {
			this.toastrService.error(responseError.error, "Validation Error")
		})
	}
}