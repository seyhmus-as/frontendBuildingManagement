import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ListResponseModel } from '../models/listResponseModel';
import { Card } from '../models/card';
import { ResponseModel } from '../models/responseModel';
import { SingleResponseModel } from '../models/singleResponseModel';
import { GlobalConstants } from '../common/global-constants';

@Injectable({
  providedIn: 'root'
})
export class CardService implements GlobalConstants {

   

  constructor(private httpClient: HttpClient) { }

  getCards(): Observable<ListResponseModel<Card>> {
    return this.httpClient.get<ListResponseModel<Card>>(GlobalConstants.apiUrl + "Cards/getall")
  }
  getCardById(viewedId: number): Observable<SingleResponseModel<Card>> {
    return this.httpClient.get<SingleResponseModel<Card>>(GlobalConstants.apiUrl + "cards/getbyid?id=" + viewedId)
  }
  add(card: CardService): Observable<ResponseModel> {
    return this.httpClient.post<ResponseModel>(GlobalConstants.apiUrl + "cards/add", card);
  }
  delete(id: number) {
    return this.httpClient.post<ResponseModel>(GlobalConstants.apiUrl + "cards/delete?id=" + id, null);
  }
  update(card: CardService): Observable<ResponseModel> {
    return this.httpClient.post<ResponseModel>(GlobalConstants.apiUrl + "cards/update", card);
  }
}
