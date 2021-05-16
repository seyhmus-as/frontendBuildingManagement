import { Apartment } from "./apartment";
import { ResponseModel } from "./responseModel";

export interface ApartmentResponseModel extends ResponseModel {
     data:Apartment[]
}