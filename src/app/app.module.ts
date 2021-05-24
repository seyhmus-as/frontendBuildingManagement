import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NaviComponent } from './components/navi/navi.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { ApartmentComponent } from './components/apartment/apartment.component';
import { FlatComponent } from './components/flat/flat.component';
import { FilterPipePipe } from './pipes/filter-pipe.pipe';
import { ApartmentAddComponent } from './components/apartment-add/apartment-add.component';
import { AuthInterceptor } from './interceptors/auth.interceptor';

import { ToastrModule } from "ngx-toastr";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { RenterComponent } from './components/renter/renter.component';
import { CardComponent } from './components/card/card.component';
import { CardHistoryComponent } from './components/card-history/card-history.component';
import { CardAddComponent } from './components/card-add/card-add.component';
import { CardHistoryAddComponent } from './components/card-history-add/card-history-add.component';
import { RenterAddComponent } from './components/renter-add/renter-add.component';
import { FlatAddComponent } from './components/flat-add/flat-add.component';
import { LoginComponent } from './components/login/login.component';
import { ApartmentDeleteComponent } from './components/apartment-delete/apartment-delete.component';
import { CardDeleteComponent } from './components/card-delete/card-delete.component';
import { CardHistoryDeleteComponent } from './components/card-history-delete/card-history-delete.component';
import { FlatDeleteComponent } from './components/flat-delete/flat-delete.component';
import { RenterDeleteComponent } from './components/renter-delete/renter-delete.component';
import { ApartmentUpdateComponent } from './components/apartment-update/apartment-update.component';
import { RenterUpdateComponent } from './components/renter-update/renter-update.component';
import { FlatUpdateComponent } from './components/flat-update/flat-update.component';
import { CardHistoryUpdateComponent } from './components/card-history-update/card-history-update.component';
import { CardUpdateComponent } from './components/card-update/card-update.component';
import { ApartmentGetbyidComponent } from './components/apartment-getbyid/apartment-getbyid.component';
import { CardGetbyidComponent } from './components/card-getbyid/card-getbyid.component';
import { CardHistoryGetbyidComponent } from './components/card-history-getbyid/card-history-getbyid.component';
import { FlatGetbyidComponent } from './components/flat-getbyid/flat-getbyid.component';
import { RenterGetbyidComponent } from './components/renter-getbyid/renter-getbyid.component';
import { RegisterComponent } from './components/register/register.component';
import { UserOperationClaimComponent } from './components/user-operation-claim/user-operation-claim.component';
import { FlatGetdetailsComponent } from './components/flat-getdetails/flat-getdetails.component';
import { UserOperationClaimAddComponent } from './components/user-operation-claim-add/user-operation-claim-add.component';
import { UserOperationClaimDeleteComponent } from './components/user-operation-claim-delete/user-operation-claim-delete.component';
import { UserComponent } from './components/user/user.component';
import { UserGetdetailsComponent } from './components/user-getdetails/user-getdetails.component';
import { UserDeleteComponent } from './components/user-delete/user-delete.component';
import { CardHistoryDetailsComponent } from './components/card-history-details/card-history-details.component';
import { CardHistoryGetmonthlymoneyComponent } from './components/card-history-getmonthlymoney/card-history-getmonthlymoney.component';
import { CardHistoryGetmonthlytotalmoneybyidComponent } from './components/card-history-getmonthlytotalmoneybyid/card-history-getmonthlytotalmoneybyid.component';
import { CardHistoryGetmonthlymoneybyidComponent } from './components/card-history-getmonthlymoneybyid/card-history-getmonthlymoneybyid.component';


@NgModule({
  declarations: [
    AppComponent,
    NaviComponent,
    SidebarComponent,
    FilterPipePipe,
    LoginComponent,

    ApartmentComponent,
    FlatComponent,
    RenterComponent,
    CardComponent,
    CardHistoryComponent,

    ApartmentAddComponent,
    CardAddComponent,
    CardHistoryAddComponent,
    RenterAddComponent,
    FlatAddComponent,

    ApartmentDeleteComponent,
    CardDeleteComponent,
    CardHistoryDeleteComponent,
    FlatDeleteComponent,
    RenterDeleteComponent,

    ApartmentUpdateComponent,
    RenterUpdateComponent,
    FlatUpdateComponent,
    CardHistoryUpdateComponent,
    CardUpdateComponent,

    ApartmentGetbyidComponent,
    CardGetbyidComponent,
    CardHistoryGetbyidComponent,
    FlatGetbyidComponent,
    RenterGetbyidComponent,
    RegisterComponent,
    UserOperationClaimComponent,
    FlatGetdetailsComponent,
    UserOperationClaimAddComponent,
    UserOperationClaimDeleteComponent,
    UserComponent,
    UserGetdetailsComponent,
    UserDeleteComponent,
    CardHistoryDetailsComponent,
    CardHistoryGetmonthlymoneyComponent,
    CardHistoryGetmonthlytotalmoneybyidComponent,
    CardHistoryGetmonthlymoneybyidComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    ToastrModule.forRoot({
      positionClass: "toast-bottom-right"
    })
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
