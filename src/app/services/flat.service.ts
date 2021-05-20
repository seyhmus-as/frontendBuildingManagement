import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ListResponseModel } from '../models/listResponseModel';
import { Flat } from '../models/flat';
import { ResponseModel } from '../models/responseModel';
import { SingleResponseModel } from '../models/singleResponseModel';

@Injectable({
  providedIn: 'root'
})
export class FlatService {

  apiUrl = 'https://localhost:44380/api/';

  constructor(private httpClient: HttpClient) { }

  getFlats(): Observable<ListResponseModel<Flat>> {
    return this.httpClient.get<ListResponseModel<Flat>>(this.apiUrl + "flats/getall")
  }
  getFlatById(viewedId: number): Observable<SingleResponseModel<Flat>> {
    return this.httpClient.get<SingleResponseModel<Flat>>(this.apiUrl + "flats/getbyid?id=" + viewedId)
  }
  add(flat: FlatService): Observable<ResponseModel> {
    return this.httpClient.post<ResponseModel>(this.apiUrl + "flats/add", flat);
  }
  delete(id: number) {
    return this.httpClient.post<ResponseModel>(this.apiUrl + "flats/delete?id=" + id, null);
  }
  update(flat: FlatService): Observable<ResponseModel> {
    return this.httpClient.post<ResponseModel>(this.apiUrl + "flats/update", flat);
  }
}