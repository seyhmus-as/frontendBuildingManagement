import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { ApartmentService } from 'src/app/services/apartment.service';

@Component({
	selector: 'app-apartment-delete',
	templateUrl: './apartment-delete.component.html',
	styleUrls: ['./apartment-delete.component.css']
})

export class ApartmentDeleteComponent implements OnInit {

	deletedId?: number
	
	constructor(
		private apartmentService: ApartmentService,
		private toastrService: ToastrService
	) { }

	ngOnInit(): void {
	}

	delete() {
		if (this.deletedId == null) {
			this.toastrService.error("Missing Form","Warning");
			return;
		}
		this.apartmentService.delete(this.deletedId).subscribe(response => {
			this.toastrService.success(response.message, "Success")
		}, responseError => {
			this.toastrService.error(responseError.error, "Validation Error")
		})
	}
}
