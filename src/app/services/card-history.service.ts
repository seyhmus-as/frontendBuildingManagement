import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ListResponseModel } from '../models/listResponseModel';
import { CardHistory } from '../models/cardHistory';
import { ResponseModel } from '../models/responseModel';
import { CardHistoryDetail } from '../models/cardHistoryDetail';
import { SingleResponseModel } from '../models/singleResponseModel';

@Injectable({
  providedIn: 'root'
})
export class CardHistoryService {

  apiUrl = 'https://localhost:44380/api/';

  constructor(private httpClient: HttpClient) { }

  getCardHistories(): Observable<ListResponseModel<CardHistory>> {
    return this.httpClient.get<ListResponseModel<CardHistory>>(this.apiUrl + "cardhistories/getall")
  }
  getCardHistoriesById(viewedId: number): Observable<ListResponseModel<CardHistory>> {
    return this.httpClient.get<ListResponseModel<CardHistory>>(this.apiUrl + "cardhistories/getbyid?cardId=" + viewedId)
  }
  add(cardHistory: CardHistoryService): Observable<ResponseModel> {
    return this.httpClient.post<ResponseModel>(this.apiUrl + "cardhistories/add", cardHistory);
  }
  delete(id: number) {
    return this.httpClient.post<ResponseModel>(this.apiUrl + "cardhistories/delete?id=" + id, null);
  }
  update(cardHistory: CardHistoryService): Observable<ResponseModel> {
    return this.httpClient.post<ResponseModel>(this.apiUrl + "cardhistories/update", cardHistory);
  }
  getCardHistoryDetails(): Observable<ListResponseModel<CardHistoryDetail>> {
    return this.httpClient.get<ListResponseModel<CardHistoryDetail>>(this.apiUrl + "cardHistories/details");
  }
  getMonthlyMoney(secondBegin:number,secondFinal:number,isIncome:boolean): Observable<SingleResponseModel<number>> {
    return this.httpClient.get<SingleResponseModel<number>>(this.apiUrl + "CardHistories/getmonthlymoney?secondBegin="+secondBegin+"&secondFinal="+secondFinal+"&isIncome="+isIncome);
  }
  getMonthlyMoneyById(flatId:number,secondBegin:number,secondFinal:number,isIncome:boolean): Observable<ListResponseModel<CardHistoryDetail>> {
    return this.httpClient.get<ListResponseModel<CardHistoryDetail>>(this.apiUrl + "CardHistories/getmonthlymoneybyid?flatId="+flatId+"&secondBegin="+secondBegin+"&secondFinal="+secondFinal+"&isIncome="+isIncome);
  }
  getMonthlyTotalMoneyById(flatId:number,secondBegin:number,secondFinal:number,isIncome:boolean): Observable<SingleResponseModel<number>> {
    return this.httpClient.get<SingleResponseModel<number>>(this.apiUrl + "CardHistories/getmonthlytotalmoneybyid?flatId="+flatId+"&secondBegin="+secondBegin+"&secondFinal="+secondFinal+"&isIncome="+isIncome);  }
}
