import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Claim } from '../models/claim';
import { ListResponseModel } from '../models/listResponseModel';

@Injectable({
  providedIn: 'root'
})
export class ClaimService {
  apiUrl = 'https://localhost:44380/api/';

  constructor(private httpClient: HttpClient) { }
  getClaims(): Observable<ListResponseModel<Claim>> {
    return this.httpClient.get<ListResponseModel<Claim>>(this.apiUrl + "auth/getclaims")
  }
}
