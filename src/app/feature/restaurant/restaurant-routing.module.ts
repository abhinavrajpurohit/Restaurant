/*
* Restaurant Module Routing importing Dependencies
*/
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RestaurantsListComponent } from './restaurants-list/restaurants-list.component';

/*
* Restaurant Route
*/
const routes: Routes = [
  {
    path: '',
    component: RestaurantsListComponent
  }
];

/*
* @NgModule decorator with its metadata
*/
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RestaurantRoutingModule { }
