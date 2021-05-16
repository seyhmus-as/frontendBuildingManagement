import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ListResponseModel } from '../models/listResponseModel';
import { Flat } from '../models/flat';

@Injectable({
  providedIn: 'root'
})
export class FlatService {

  apiUrl='https://localhost:44380/api/flats/getall';

  constructor(private httpClient: HttpClient) { }

  getFlats():Observable<ListResponseModel<Flat>>{
    return this.httpClient.get<ListResponseModel<Flat>>(this.apiUrl)
  }
}