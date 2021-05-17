import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NaviComponent } from './components/navi/navi.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { ApartmentComponent } from './components/apartment/apartment.component';
import { FlatComponent } from './components/flat/flat.component';
import { FilterPipePipe } from './pipes/filter-pipe.pipe';
import { ApartmentAddComponent } from './components/apartment-add/apartment-add.component';

import { ToastrModule } from "ngx-toastr";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations"
@NgModule({
  declarations: [
    AppComponent,
    NaviComponent,
    SidebarComponent,
    ApartmentComponent,
    FlatComponent,
    FilterPipePipe,
    ApartmentAddComponent
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
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
