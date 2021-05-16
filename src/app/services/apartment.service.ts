import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ListResponseModel } from '../models/listResponseModel';
import { Apartment } from '../models/apartment';

@Injectable({
  providedIn: 'root'
})
export class ApartmentService {

  apiUrl='https://localhost:44380/api/apartments/getall';

  constructor(private httpClient: HttpClient) { }

  getApartments():Observable<ListResponseModel<Apartment>>{
    return this.httpClient.get<ListResponseModel<Apartment>>(this.apiUrl)
  }
}
