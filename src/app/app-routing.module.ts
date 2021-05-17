import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ApartmentComponent } from './components/apartment/apartment.component';
import { FlatComponent } from './components/flat/flat.component';
import { ApartmentAddComponent } from './components/apartment-add/apartment-add.component';

const routes: Routes = [
  {path:"",pathMatch:"full",component:ApartmentComponent},
  {path:"apartments",component:ApartmentComponent},
  {path:"flats",component:FlatComponent},
  { path: "apartments/add", component: ApartmentAddComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
