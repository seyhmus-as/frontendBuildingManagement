import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ListResponseModel } from '../models/listResponseModel';
import { Apartment } from '../models/apartment';
import { ResponseModel } from '../models/responseModel';
import { HttpClient } from '@angular/common/http';
import { SingleResponseModel } from '../models/singleResponseModel';
import { GlobalConstants } from '../common/global-constants';

@Injectable({
  providedIn: 'root'
})
export class ApartmentService implements GlobalConstants {

  constructor(
    private httpClient: HttpClient
  ) { }

  getApartments(): Observable<ListResponseModel<Apartment>> {
    return this.httpClient.get<ListResponseModel<Apartment>>(GlobalConstants.apiUrl + "apartments/getall")
  }
  getApartmentsById(viewedId: number): Observable<SingleResponseModel<Apartment>> {
    return this.httpClient.get<SingleResponseModel<Apartment>>(GlobalConstants.apiUrl + "apartments/getbyid?id=" + viewedId)
  }
  add(apartment: ApartmentService): Observable<ResponseModel> {
    return this.httpClient.post<ResponseModel>(GlobalConstants.apiUrl + "apartments/add", apartment);
  }
  delete(id: number) {
    return this.httpClient.post<ResponseModel>(GlobalConstants.apiUrl + "apartments/delete?id=" + id, null);
  }
  update(apartment: ApartmentService): Observable<ResponseModel> {
    return this.httpClient.post<ResponseModel>(GlobalConstants.apiUrl + "apartments/update", apartment);
  }
}
