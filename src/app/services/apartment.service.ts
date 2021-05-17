import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ListResponseModel } from '../models/listResponseModel';
import { Apartment } from '../models/apartment';
import { ResponseModel } from '../models/responseModel';

@Injectable({
  providedIn: 'root'
})
export class ApartmentService {

  apiUrl='https://localhost:44380/api/';

  constructor(private httpClient: HttpClient) { }

  getApartments():Observable<ListResponseModel<Apartment>>{
    return this.httpClient.get<ListResponseModel<Apartment>>(this.apiUrl + "apartments/getall")
  }
  add(apartment:ApartmentService):Observable<ResponseModel>{
		return this.httpClient.post<ResponseModel>(this.apiUrl+"apartments/add",apartment);
	}
}
