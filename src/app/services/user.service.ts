import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ListResponseModel } from '../models/listResponseModel';
import { User } from '../models/user';
import { ResponseModel } from '../models/responseModel';
import { SingleResponseModel } from '../models/singleResponseModel';
import { UserDetail } from '../models/userDetail';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  apiUrl = 'https://localhost:44380/api/';

  constructor(private httpClient: HttpClient) { }

  getUsers(): Observable<ListResponseModel<User>> {
    return this.httpClient.get<ListResponseModel<User>>(this.apiUrl + "users/getall")
  }
  getUserDetails(): Observable<ListResponseModel<UserDetail>> {
    return this.httpClient.get<ListResponseModel<UserDetail>>(this.apiUrl + "users/getdetails")
  }
  delete(email: string) {
    return this.httpClient.post<ResponseModel>(this.apiUrl + "users/delete?email=" + email, null);
  }
}