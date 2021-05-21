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

import { ApartmentDeleteComponent } from './components/apartment-delete/apartment-delete.component';
import { CardDeleteComponent } from './components/card-delete/card-delete.component';
import { FlatDeleteComponent } from './components/flat-delete/flat-delete.component';
import { CardHistoryDeleteComponent } from './components/card-history-delete/card-history-delete.component';
import { RenterDeleteComponent } from './components/renter-delete/renter-delete.component';

import { ApartmentUpdateComponent } from './components/apartment-update/apartment-update.component';
import { CardUpdateComponent } from './components/card-update/card-update.component';
import { FlatUpdateComponent } from './components/flat-update/flat-update.component';
import { CardHistoryUpdateComponent } from './components/card-history-update/card-history-update.component';
import { RenterUpdateComponent } from './components/renter-update/renter-update.component';

import { ApartmentGetbyidComponent } from './components/apartment-getbyid/apartment-getbyid.component';
import { CardGetbyidComponent } from './components/card-getbyid/card-getbyid.component';
import { CardHistoryGetbyidComponent } from './components/card-history-getbyid/card-history-getbyid.component';
import { FlatGetbyidComponent } from './components/flat-getbyid/flat-getbyid.component';
import { RenterGetbyidComponent } from './components/renter-getbyid/renter-getbyid.component';

import { RegisterComponent } from './components/register/register.component';
import { UserOperationClaimComponent } from './components/user-operation-claim/user-operation-claim.component';


const routes: Routes = [
  {path:"",pathMatch:"full",component:ApartmentComponent,canActivate:[LoginGuard]},

  {path:"apartments",component:ApartmentComponent,canActivate:[LoginGuard]},
  {path:"flats",component:FlatComponent,canActivate:[LoginGuard]},
  {path:"cards",component:CardComponent,canActivate:[LoginGuard]},
  {path:"cardHistories",component:CardHistoryComponent,canActivate:[LoginGuard]},
  {path:"renters",component:RenterComponent,canActivate:[LoginGuard]},
  
  {path: "login", component: LoginComponent},
  {path: "register", component: RegisterComponent,canActivate:[LoginGuard]},

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

  {path: "apartments/update", component: ApartmentUpdateComponent,canActivate:[LoginGuard]},
  {path: "cards/update", component: CardUpdateComponent,canActivate:[LoginGuard]},
  {path: "flats/update", component: FlatUpdateComponent,canActivate:[LoginGuard]},
  {path: "cardHistories/update", component: CardHistoryUpdateComponent,canActivate:[LoginGuard]},
  {path: "renters/update", component: RenterUpdateComponent,canActivate:[LoginGuard]},
  
  {path: "apartments/getbyid", component: ApartmentGetbyidComponent,canActivate:[LoginGuard]},
  {path: "cards/getbyid", component: CardGetbyidComponent,canActivate:[LoginGuard]},
  {path: "cardHistories/getbyid", component: CardHistoryGetbyidComponent,canActivate:[LoginGuard]},
  {path: "flats/getbyid", component: FlatGetbyidComponent,canActivate:[LoginGuard]},
  {path: "renters/getbyid", component: RenterGetbyidComponent,canActivate:[LoginGuard]},

  {path: "userclaims", component: UserOperationClaimComponent,canActivate:[LoginGuard]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
