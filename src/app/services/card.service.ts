import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ListResponseModel } from '../models/listResponseModel';
import { Card } from '../models/card';
import { ResponseModel } from '../models/responseModel';

@Injectable({
  providedIn: 'root'
})
export class CardService {

  apiUrl = 'https://localhost:44380/api/';

  constructor(private httpClient: HttpClient) { }

  getCards(): Observable<ListResponseModel<Card>> {
    return this.httpClient.get<ListResponseModel<Card>>(this.apiUrl + "Cards/getall")
  }
  add(card: CardService): Observable<ResponseModel> {
    return this.httpClient.post<ResponseModel>(this.apiUrl + "cards/add", card);
  }
  delete(params: HttpParams) {
    console.log(this.apiUrl + "cards/delete?" + params);
    return this.httpClient.get<ResponseModel>(this.apiUrl + "cards/delete", { params });
  }
  update(card: CardService): Observable<ResponseModel> {
    return this.httpClient.post<ResponseModel>(this.apiUrl + "cards/update", card);
  }
}
