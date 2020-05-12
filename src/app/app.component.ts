/*
* Angular Root Component with Routing
*/
import { Component } from '@angular/core';
/*
* @Component decorator with its metadata
*/
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
/*
* Application Root Component Declaration
*/
export class AppComponent {
  title = 'restaurants-app';
}
