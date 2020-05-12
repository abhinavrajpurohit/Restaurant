/*
* Declaration of Core Module with Dependencies Header, HTTP
*/
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';

import { HttpService } from './services/http.service';

/*
* @NgModule decorator with its metadata
*/
@NgModule({
  declarations: [HeaderComponent],
  imports: [
    CommonModule
  ],
  providers: [HttpService],
  exports: [HeaderComponent]
})
export class CoreModule { }
