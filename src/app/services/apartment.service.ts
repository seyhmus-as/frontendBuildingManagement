import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ListResponseModel } from '../models/listResponseModel';
import { Apartment } from '../models/apartment';
import { ResponseModel } from '../models/responseModel';
import { HttpClient, HttpParams } from '@angular/common/http';
import { SingleResponseModel } from '../models/singleResponseModel';

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
  getApartmentsById(viewedId: number): Observable<SingleResponseModel<Apartment>>{
    return this.httpClient.get<SingleResponseModel<Apartment>>(this.apiUrl + "apartments/getbyid?id=" + viewedId)
  }
  add(apartment: ApartmentService): Observable<ResponseModel> {
    return this.httpClient.post<ResponseModel>(this.apiUrl + "apartments/add", apartment);
  }
  delete(id: number) {
    return this.httpClient.post<ResponseModel>(this.apiUrl + "apartments/delete?id=" + id, null);
  }
  update(apartment: ApartmentService): Observable<ResponseModel> {
    return this.httpClient.post<ResponseModel>(this.apiUrl + "apartments/update", apartment);
  }
}
