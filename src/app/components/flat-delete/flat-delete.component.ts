import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { FlatService } from 'src/app/services/flat.service';
@Component({
	selector: 'app-flat-delete',
	templateUrl: './flat-delete.component.html',
	styleUrls: ['./flat-delete.component.css']
})

export class FlatDeleteComponent implements OnInit {

	deletedId?: number
	constructor(
		private flatService: FlatService,
		private toastrService: ToastrService
	) { }

	ngOnInit(): void {
	}

	delete() {
		if (this.deletedId == null) {
			this.toastrService.error("Missing Form","Warning");
			return;
		}
		this.flatService.delete(this.deletedId).subscribe(response => {
			this.toastrService.success(response.message, "Success")
		}, responseError => {
			this.toastrService.error(responseError.error, "Validation Error")
		})
	}
}
