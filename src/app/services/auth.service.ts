import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LoginModel } from '../models/loginModel';
import { SingleResponseModel } from '../models/singleResponseModel';
import { TokenModel } from '../models/tokenModel';
import { RegisterModel } from '../models/registerModel';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { GlobalConstants } from '../common/global-constants';


@Injectable({
	providedIn: 'root'
})
export class AuthService implements GlobalConstants {
	apiUrl = GlobalConstants.apiUrl+'auth/';
	constructor(
		private httpClient: HttpClient,
		private router: Router,
		private toastrService: ToastrService
	) { }

	login(loginModel: LoginModel) {
		return this.httpClient.post<SingleResponseModel<TokenModel>>(this.apiUrl + "login", loginModel)
	}
	register(registerModel: RegisterModel) {
		return this.httpClient.post<SingleResponseModel<RegisterModel>>(this.apiUrl + "register", registerModel)
	}
	isAuthenticated() {
		if (localStorage.getItem("token")) {
			return true;
		}
		else {
			return false;
		}
	}
	signOut(): void {
		if (localStorage.getItem('token') == null) {
			this.toastrService.info("Already No Account")
		}
		else {
			localStorage.removeItem('token');
			localStorage.removeItem('accountName');
			this.toastrService.success("You've been logged out");
			this.router.navigate(['login']);
		}
	}
}