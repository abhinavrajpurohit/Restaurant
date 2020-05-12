/*
* Declaration of Core Module importing Dependencies
*/
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { GoogleMapsModule } from '@angular/google-maps';

import { RestaurantRoutingModule } from './restaurant-routing.module';
import { RestaurantsListComponent } from './restaurants-list/restaurants-list.component';
import { SharedModule } from '@shared/shared.module';

/*
* @NgModule decorator with its metadata
*/
@NgModule({
  declarations: [RestaurantsListComponent],
  imports: [
    FormsModule,
    CommonModule,
    GoogleMapsModule,
    SharedModule,
    RestaurantRoutingModule
  ]
})
export class RestaurantModule { }
