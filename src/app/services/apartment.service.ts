import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ListResponseModel } from '../models/listResponseModel';
import { Apartment } from '../models/apartment';
import { ResponseModel } from '../models/responseModel';
import { HttpClient, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApartmentService {

  apiUrl = 'https://localhost:44380/api/';

  constructor(
    private httpClient: HttpClient
  ) { }

  getApartments(): Observable<ListResponseModel<Apartment>> {
    return this.httpClient.get<ListResponseModel<Apartment>>(this.apiUrl + "apartments/getall")
  }
  add(apartment: ApartmentService): Observable<ResponseModel> {
    return this.httpClient.post<ResponseModel>(this.apiUrl + "apartments/add", apartment);
  }
  delete(params: HttpParams) {
    console.log(this.apiUrl + "apartments/delete?" + params);
    return this.httpClient.get<ResponseModel>(this.apiUrl + "apartments/delete", { params });
  }
  update(apartment: ApartmentService): Observable<ResponseModel> {
    return this.httpClient.post<ResponseModel>(this.apiUrl + "apartments/update", apartment);
  }
}
