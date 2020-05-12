/*
* Application Spinner with Dependencies
*/
import { Component, OnInit, Input } from '@angular/core';
/*
* @Component decorator with its metadata
*/
@Component({
  selector: 'app-spinner',
  templateUrl: './spinner.component.html',
  styleUrls: ['./spinner.component.scss']
})
/*
* Spinner Component Declaration
*/
export class SpinnerComponent implements OnInit {
  /*
  * Input Properties
  */
  @Input() isLoading = false;
  @Input() message: string | undefined;

  /*
  * Constructor for Header Component
  */
  constructor() { }

  /*
  * Component Lifecycle Method
  */
  ngOnInit(): void {
  }

}
