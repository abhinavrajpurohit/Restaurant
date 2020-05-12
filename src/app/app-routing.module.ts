/*
* Application Root Routing importing Dependencies
*/
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

/*
* Application Main Route
*/
const routes: Routes = [
  {
    path: 'restaurants',
    loadChildren: () => import('./feature/restaurant/restaurant.module').then(m => m.RestaurantModule)
  },
  {
    path: '',
    redirectTo: 'feature',
    pathMatch: 'full'
  }
];

/*
* @NgModule decorator with its metadata
*/
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
