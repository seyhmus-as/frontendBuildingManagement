import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ListResponseModel } from '../models/listResponseModel';
import { Renter } from '../models/renter';
import { ResponseModel } from '../models/responseModel';

@Injectable({
  providedIn: 'root'
})
export class RenterService {

  apiUrl = 'https://localhost:44380/api/';

  constructor(private httpClient: HttpClient) { }

  getRenters(): Observable<ListResponseModel<Renter>> {
    return this.httpClient.get<ListResponseModel<Renter>>(this.apiUrl + "renters/getall")
  }
  add(renter: RenterService): Observable<ResponseModel> {
    return this.httpClient.post<ResponseModel>(this.apiUrl + "renters/add", renter);
  }
  delete(id:number) {
    console.log(this.apiUrl + "renters/delete?"+id);
    return this.httpClient.post<ResponseModel>(this.apiUrl + "renters/delete?id="+id, null);
  }
  update(renter: RenterService): Observable<ResponseModel> {
    return this.httpClient.post<ResponseModel>(this.apiUrl + "renters/update", renter);
  }
}
