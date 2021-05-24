import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-user-delete',
  templateUrl: './user-delete.component.html',
  styleUrls: ['./user-delete.component.css']
})

export class UserDeleteComponent implements OnInit {

	deletedEmail?: string

	constructor(
		private userService: UserService,
		private toastrService: ToastrService
	) { }

	ngOnInit(): void {
	}

	delete() {
		if (this.deletedEmail == null) {
			this.toastrService.error("Missing Form","Warning");
			return;
		}
		this.userService.delete(this.deletedEmail).subscribe(response => {
			this.toastrService.success(response.message, "Success")
		}, responseError => {
			this.toastrService.error(responseError.error, "Validation Error")
		})
	}
}
