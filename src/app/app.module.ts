/*
* Declaration of Angular Root Module with Dependencies
*/
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { CoreModule } from './core/core.module';
import { SharedModule } from './shared/shared.module';
import { RestaurantModule } from './feature/restaurant/restaurant.module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

/*
* @NgModule decorator with its metadata
*/
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgbModule,
    CoreModule,
    SharedModule,
    RestaurantModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
