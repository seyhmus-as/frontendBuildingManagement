import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LoginModel } from '../models/loginModel';
import { SingleResponseModel } from '../models/singleResponseModel';
import { TokenModel } from '../models/tokenModel';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';


@Injectable({
	providedIn: 'root'
})
export class AuthService {

	apiUrl = 'https://localhost:44380/api/auth/';
	constructor(
		private httpClient: HttpClient,
		private router: Router,
		private toastrService: ToastrService
	) { }

	login(loginModel: LoginModel) {
		return this.httpClient.post<SingleResponseModel<TokenModel>>(this.apiUrl + "login", loginModel)
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
			this.toastrService.info("giriş olmadan çıkış nasıl olacak hele bi söyle")
		}
		else {
			localStorage.removeItem('token');
			this.toastrService.success("You've been logged out");
			this.router.navigate(['login']);
		}
	}
}