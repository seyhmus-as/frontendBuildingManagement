import { LoginModel } from "./loginModel";

export interface RegisterModel extends LoginModel{
     FirstName:string;
     LastName:string;
}