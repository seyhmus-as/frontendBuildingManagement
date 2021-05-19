import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ListResponseModel } from '../models/listResponseModel';
import { Flat } from '../models/flat';
import { ResponseModel } from '../models/responseModel';

@Injectable({
  providedIn: 'root'
})
export class FlatService {

  apiUrl = 'https://localhost:44380/api/';

  constructor(private httpClient: HttpClient) { }

  getFlats(): Observable<ListResponseModel<Flat>> {
    return this.httpClient.get<ListResponseModel<Flat>>(this.apiUrl + "flats/getall")
  }
  add(flat: FlatService): Observable<ResponseModel> {
    return this.httpClient.post<ResponseModel>(this.apiUrl + "flats/add", flat);
  }
  delete(id:number) {
    return this.httpClient.post<ResponseModel>(this.apiUrl + "flats/delete?id="+id, null);
  }
  update(flat: FlatService): Observable<ResponseModel> {
    return this.httpClient.post<ResponseModel>(this.apiUrl + "flats/update", flat);
  }
}