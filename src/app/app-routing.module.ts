import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ApartmentComponent } from './components/apartment/apartment.component';
import { CardComponent } from './components/card/card.component';
import { CardHistoryComponent } from './components/card-history/card-history.component';
import { RenterComponent } from './components/renter/renter.component';
import { FlatComponent } from './components/flat/flat.component';
import { ApartmentAddComponent } from './components/apartment-add/apartment-add.component';
import { RenterAddComponent } from './components/renter-add/renter-add.component';
import { CardAddComponent } from './components/card-add/card-add.component';
import { FlatAddComponent } from './components/flat-add/flat-add.component';
import { CardHistoryAddComponent } from './components/card-history-add/card-history-add.component';
import { LoginComponent } from './components/login/login.component';
import { LoginGuard } from './guards/login.guard';

const routes: Routes = [
  {path:"",pathMatch:"full",component:ApartmentComponent},
  {path:"apartments",component:ApartmentComponent},
  {path:"flats",component:FlatComponent},
  {path:"cards",component:CardComponent},
  {path:"cardHistories",component:CardHistoryComponent},
  {path:"renters",component:RenterComponent},

  {path: "apartments/add", component: ApartmentAddComponent,canActivate:[LoginGuard]},
  {path: "renters/add", component: RenterAddComponent},
  {path: "flats/add", component: FlatAddComponent},
  {path: "cards/add", component: CardAddComponent},
  {path: "cardHistories/add", component: CardHistoryAddComponent},
  {path: "login", component: LoginComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
