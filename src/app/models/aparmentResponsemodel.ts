import { Apartment } from "./Apartment";
import { ResponseModel } from "./responseModel";

export interface ApartmentResponseModel extends ResponseModel {
     data:Apartment[]
}