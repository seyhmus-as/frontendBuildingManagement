import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ListResponseModel } from '../models/listResponseModel';
import { CardHistory } from '../models/cardHistory';
import { ResponseModel } from '../models/responseModel';

@Injectable({
  providedIn: 'root'
})
export class CardHistoryService {

  apiUrl = 'https://localhost:44380/api/';

  constructor(private httpClient: HttpClient) { }

  getCardHistorys(): Observable<ListResponseModel<CardHistory>> {
    return this.httpClient.get<ListResponseModel<CardHistory>>(this.apiUrl + "cardhistories/getall")
  }
  add(cardHistory: CardHistoryService): Observable<ResponseModel> {
    return this.httpClient.post<ResponseModel>(this.apiUrl + "cardhistories/add", cardHistory);
  }
  delete(params: HttpParams) {
    console.log(this.apiUrl + "cardhistories/delete?" + params);
    return this.httpClient.get<ResponseModel>(this.apiUrl + "cardhistories/delete", { params });
  }
  update(cardHistory: CardHistoryService): Observable<ResponseModel> {
    return this.httpClient.post<ResponseModel>(this.apiUrl + "cardhistories/update", cardHistory);
  }
}
