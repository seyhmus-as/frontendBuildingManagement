import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ListResponseModel } from '../models/listResponseModel';
import { ResponseModel } from '../models/responseModel';
import { SingleResponseModel } from '../models/singleResponseModel';
import { UserOperationClaim } from '../models/userOperationClaim';

@Injectable({
  providedIn: 'root'
})
export class UserOperationClaimService {

  apiUrl = 'https://localhost:44380/api/';

  constructor(private httpClient: HttpClient) { }

  getUserOperationClaims(): Observable<ListResponseModel<UserOperationClaim>> {
    return this.httpClient.get<ListResponseModel<UserOperationClaim>>(this.apiUrl + "userOperationClaims/getall")
  }
  add(renter: UserOperationClaimService): Observable<ResponseModel> {
    return this.httpClient.post<ResponseModel>(this.apiUrl + "UserOperationClaims/add", renter);
  }
  delete(id: number) {
    return this.httpClient.post<ResponseModel>(this.apiUrl + "UserOperationClaims/delete?id=" + id, null);
  }
}
