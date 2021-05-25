import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ListResponseModel } from '../models/listResponseModel';
import { ResponseModel } from '../models/responseModel';
import { SingleResponseModel } from '../models/singleResponseModel';
import { UserOperationClaim } from '../models/userOperationClaim';
import { GlobalConstants } from '../common/global-constants';

@Injectable({
  providedIn: 'root'
})
export class UserOperationClaimService implements GlobalConstants {

   

  constructor(private httpClient: HttpClient) { }

  getUserOperationClaims(): Observable<ListResponseModel<UserOperationClaim>> {
    return this.httpClient.get<ListResponseModel<UserOperationClaim>>(GlobalConstants.apiUrl + "userOperationClaims/getall")
  }
  add(renter: UserOperationClaimService): Observable<ResponseModel> {
    return this.httpClient.post<ResponseModel>(GlobalConstants.apiUrl + "UserOperationClaims/add", renter);
  }
  delete(id: number) {
    return this.httpClient.post<ResponseModel>(GlobalConstants.apiUrl + "UserOperationClaims/delete?id=" + id, null);
  }
}
