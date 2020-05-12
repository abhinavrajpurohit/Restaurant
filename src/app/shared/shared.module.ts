/*
* Declaration of Shared Module with Dependencies
*/
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import * as fromPipes from './pipe';
import * as fromComponents from './components';

/*
* @NgModule decorator with its metadata
*/
@NgModule({
  declarations: [...fromPipes.pipes, ...fromComponents.components],
  imports: [
    CommonModule
  ],
  exports: [...fromPipes.pipes, ...fromComponents.components]
})
export class SharedModule { }
