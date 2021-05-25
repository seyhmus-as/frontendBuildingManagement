import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ListResponseModel } from '../models/listResponseModel';
import { Renter } from '../models/renter';
import { ResponseModel } from '../models/responseModel';
import { SingleResponseModel } from '../models/singleResponseModel';
import { GlobalConstants } from '../common/global-constants';

@Injectable({
  providedIn: 'root'
})
export class RenterService implements GlobalConstants {

   

  constructor(private httpClient: HttpClient) { }

  getRenters(): Observable<ListResponseModel<Renter>> {
    return this.httpClient.get<ListResponseModel<Renter>>(GlobalConstants.apiUrl + "renters/getall")
  }
  getRenterById(viewedId: number): Observable<SingleResponseModel<Renter>> {
    return this.httpClient.get<SingleResponseModel<Renter>>(GlobalConstants.apiUrl + "renters/getbyid?id=" + viewedId)
  }
  add(renter: RenterService): Observable<ResponseModel> {
    return this.httpClient.post<ResponseModel>(GlobalConstants.apiUrl + "renters/add", renter);
  }
  delete(id: number) {
    return this.httpClient.post<ResponseModel>(GlobalConstants.apiUrl + "renters/delete?id=" + id, null);
  }
  update(renter: RenterService): Observable<ResponseModel> {
    return this.httpClient.post<ResponseModel>(GlobalConstants.apiUrl + "renters/update", renter);
  }
}
