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
    RenterDeleteComponent
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
