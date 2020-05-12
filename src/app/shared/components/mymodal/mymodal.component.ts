/*
* Application Modal with Dependencies
*/
import { Component, OnInit, Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
/*
* @Component decorator with its metadata
*/
@Component({
  selector: 'app-mymodal',
  templateUrl: './mymodal.component.html',
  styleUrls: ['./mymodal.component.scss']
})
/*
* MyModal Component Declaration
*/
export class MymodalComponent implements OnInit {
  /*
  * Input Properties
  */
  @Input() myModalTitle;
  @Input() myModalContent;

  /*
  * Constructor for Header Component
  */
  constructor(public activeModal: NgbActiveModal) { }

  /*
  * Component Lifecycle Method
  */
  ngOnInit(): void {
  }

}
