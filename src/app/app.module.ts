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
import { ClaimComponent } from './components/claim/claim.component';
import { ClaimAddComponent } from './components/claim-add/claim-add.component';

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
    ClaimComponent,
    ClaimAddComponent,
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
