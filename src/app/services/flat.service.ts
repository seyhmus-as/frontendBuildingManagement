import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ListResponseModel } from '../models/listResponseModel';
import { Flat } from '../models/flat';
import { ResponseModel } from '../models/responseModel';
import { SingleResponseModel } from '../models/singleResponseModel';
import { FlatDetail } from '../models/flatDetail';
import { GlobalConstants } from '../common/global-constants';
@Injectable({
  providedIn: 'root'
})
export class FlatService implements GlobalConstants {

   

  constructor(private httpClient: HttpClient) { }

  getFlats(): Observable<ListResponseModel<Flat>> {
    return this.httpClient.get<ListResponseModel<Flat>>(GlobalConstants.apiUrl + "flats/getall")
  }
  getFlatDetails(): Observable<ListResponseModel<FlatDetail>> {
    return this.httpClient.get<ListResponseModel<FlatDetail>>(GlobalConstants.apiUrl + "flats/getdetails")
  }
  getFlatById(viewedId: number): Observable<SingleResponseModel<Flat>> {
    return this.httpClient.get<SingleResponseModel<Flat>>(GlobalConstants.apiUrl + "flats/getbyid?id=" + viewedId)
  }
  add(flat: FlatService): Observable<ResponseModel> {
    return this.httpClient.post<ResponseModel>(GlobalConstants.apiUrl + "flats/add", flat);
  }
  delete(id: number) {
    return this.httpClient.post<ResponseModel>(GlobalConstants.apiUrl + "flats/delete?id=" + id, null);
  }
  update(flat: FlatService): Observable<ResponseModel> {
    return this.httpClient.post<ResponseModel>(GlobalConstants.apiUrl + "flats/update", flat);
  }
}