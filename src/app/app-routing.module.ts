import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ApartmentComponent } from './components/apartment/apartment.component';
import { CardComponent } from './components/card/card.component';
import { CardHistoryComponent } from './components/card-history/card-history.component';
import { RenterComponent } from './components/renter/renter.component';
import { FlatComponent } from './components/flat/flat.component';
import { ApartmentAddComponent } from './components/apartment-add/apartment-add.component';

const routes: Routes = [
  {path:"",pathMatch:"full",component:ApartmentComponent},
  {path:"apartments",component:ApartmentComponent},
  {path:"flats",component:FlatComponent},
  {path:"cards",component:CardComponent},
  {path:"cardHistories",component:CardHistoryComponent},
  {path:"renters",component:RenterComponent},

  {path: "apartments/add", component: ApartmentAddComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
