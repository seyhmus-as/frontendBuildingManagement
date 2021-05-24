import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ListResponseModel } from '../models/listResponseModel';
import { Renter } from '../models/renter';
import { ResponseModel } from '../models/responseModel';
import { SingleResponseModel } from '../models/singleResponseModel';

@Injectable({
  providedIn: 'root'
})
export class RenterService {

  apiUrl = 'https://localhost:44380/api/';

  constructor(private httpClient: HttpClient) { }

  getRenters(): Observable<ListResponseModel<Renter>> {
    return this.httpClient.get<ListResponseModel<Renter>>(this.apiUrl + "renters/getall")
  }
  getRenterById(viewedId: number): Observable<SingleResponseModel<Renter>> {
    return this.httpClient.get<SingleResponseModel<Renter>>(this.apiUrl + "renters/getbyid?id=" + viewedId)
  }
  add(renter: RenterService): Observable<ResponseModel> {
    return this.httpClient.post<ResponseModel>(this.apiUrl + "renters/add", renter);
  }
  delete(id: number) {
    return this.httpClient.post<ResponseModel>(this.apiUrl + "renters/delete?id=" + id, null);
  }
  update(renter: RenterService): Observable<ResponseModel> {
    return this.httpClient.post<ResponseModel>(this.apiUrl + "renters/update", renter);
  }
}
