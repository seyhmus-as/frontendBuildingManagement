import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ApartmentResponseModel } from '../models/aparmentResponseModel';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApartmentService {

  apiUrl='https://localhost:44380/api/apartments/getall';

  constructor(private httpClient: HttpClient) { }

  getApartments():Observable<ApartmentResponseModel>{
    return this.httpClient.get<ApartmentResponseModel>(this.apiUrl)
  }
}
