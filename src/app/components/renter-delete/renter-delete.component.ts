import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { RenterService } from 'src/app/services/renter.service';
@Component({
	selector: 'app-renter-delete',
	templateUrl: './renter-delete.component.html',
	styleUrls: ['./renter-delete.component.css']
})

export class RenterDeleteComponent implements OnInit {

	deletedId?: number

	constructor(
		private renterService: RenterService,
		private toastrService: ToastrService
	) { }

	ngOnInit(): void {
	}

	delete() {
		if (this.deletedId == null) {
			this.toastrService.error("number girmediniz");
			return;
		}
		this.renterService.delete(this.deletedId).subscribe(response => {
			this.toastrService.success(response.message, "Başarılı")
		}, responseError => {
			this.toastrService.error(responseError.error, "Doğrulama hatası")
		})
	}
}
