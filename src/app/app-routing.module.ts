import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ApartmentComponent } from './components/apartment/apartment.component';
import { CardComponent } from './components/card/card.component';
import { CardHistoryComponent } from './components/card-history/card-history.component';
import { RenterComponent } from './components/renter/renter.component';
import { FlatComponent } from './components/flat/flat.component';
import { ApartmentAddComponent } from './components/apartment-add/apartment-add.component';
import { ApartmentDeleteComponent } from './components/apartment-delete/apartment-delete.component';
import { RenterAddComponent } from './components/renter-add/renter-add.component';
import { CardAddComponent } from './components/card-add/card-add.component';
import { FlatAddComponent } from './components/flat-add/flat-add.component';
import { CardHistoryAddComponent } from './components/card-history-add/card-history-add.component';
import { LoginComponent } from './components/login/login.component';
import { LoginGuard } from './guards/login.guard';
import { CardDeleteComponent } from './components/card-delete/card-delete.component';
import { FlatDeleteComponent } from './components/flat-delete/flat-delete.component';
import { CardHistoryDeleteComponent } from './components/card-history-delete/card-history-delete.component';
import { RenterDeleteComponent } from './components/renter-delete/renter-delete.component';

const routes: Routes = [
  {path:"",pathMatch:"full",component:ApartmentComponent},

  {path:"apartments",component:ApartmentComponent},
  {path:"flats",component:FlatComponent},
  {path:"cards",component:CardComponent},
  {path:"cardHistories",component:CardHistoryComponent},
  {path:"renters",component:RenterComponent},
  
  {path: "login", component: LoginComponent},

  {path: "apartments/add", component: ApartmentAddComponent,canActivate:[LoginGuard]},
  {path: "renters/add", component: RenterAddComponent,canActivate:[LoginGuard]},
  {path: "flats/add", component: FlatAddComponent,canActivate:[LoginGuard]},
  {path: "cards/add", component: CardAddComponent,canActivate:[LoginGuard]},
  {path: "cardHistories/add", component: CardHistoryAddComponent,canActivate:[LoginGuard]},

  {path: "apartments/delete", component: ApartmentDeleteComponent,canActivate:[LoginGuard]},
  {path: "cards/delete", component: CardDeleteComponent,canActivate:[LoginGuard]},
  {path: "flats/delete", component: FlatDeleteComponent,canActivate:[LoginGuard]},
  {path: "cardHistories/delete", component: CardHistoryDeleteComponent,canActivate:[LoginGuard]},
  {path: "renters/delete", component: RenterDeleteComponent,canActivate:[LoginGuard]},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
