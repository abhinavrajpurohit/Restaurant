/*
* Restaurant Component importing Dependencies
*/
import { Component, OnInit, ViewChild } from '@angular/core';
import { MapInfoWindow, MapMarker, GoogleMap } from '@angular/google-maps';
import { NgbModal, ModalDismissReasons, NgbModalOptions } from '@ng-bootstrap/ng-bootstrap';

import { Mockapiurl } from '@shared/common/mockapiurl/mockapiurl';
import { HttpService } from '@core/services/http.service';
import { MymodalComponent } from '@shared/components/mymodal/mymodal.component';

/*
* @Component decorator with its metadata
*/
@Component({
  selector: 'app-restaurants-list',
  templateUrl: './restaurants-list.component.html',
  styleUrls: ['./restaurants-list.component.scss']
})

/*
* Restaurant Component Declaration
*/
export class RestaurantsListComponent implements OnInit {
  /*
  * View child with its metadata
  */
  @ViewChild(GoogleMap, { static: false }) map: GoogleMap;
  @ViewChild(MapInfoWindow, { static: false }) info: MapInfoWindow;

  /*
  * Component Variable Declarations
  */
  center: google.maps.LatLngLiteral;
  infoContent = '';
  isLoading = false;
  modalOptions: NgbModalOptions;
  options: google.maps.MapOptions = {
    zoomControl: false,
    scrollwheel: false,
    disableDoubleClickZoom: true,
    mapTypeId: 'hybrid',
    maxZoom: 15,
    minZoom: 8,
  };
  restaurants = [];
  searchText: string = '';
  zoom = 11;

  /*
  * Constructor for Header Component
  */
  constructor(private httpService: HttpService, private modalService: NgbModal) { }

  /*
  * Component Lifecycle Method for Initialisation
  */
  ngOnInit(): void {
    this.isLoading = true;
    this.getRestaurants();
  }

  /**
   * This is a google function to show information on click of marker.
   * @author Abhinav Rajpurohit
   * @version 1.0.0
   * @param object value - marker element object
   * @param string value - information to be shown in the tooltip of marker
   * @return Return a tooltip with information
   * @example
   * openInfo({}, 'ABC')
   */
  openInfo(marker: MapMarker, content) {
    this.infoContent = content
    this.info.open(marker);
  }

  /**
   * This is a function to get list of restaurants by making an api call.
   * @author Abhinav Rajpurohit
   * @version 1.0.0
   * @return Return a list of restaurants
   * @example
   * getRestaurants()
   */
  getRestaurants() {
    this.httpService.GetAll(`${Mockapiurl.RESTAURANTS_MOCK_API_URL}`)
      .subscribe(restaurants => {
        this.restaurants = Object.keys(restaurants).map(objectIndex => restaurants[objectIndex]);
        this.isLoading = false;
        navigator.geolocation.getCurrentPosition(position => {
          this.center = {
            lat: this.restaurants[0].location.lat,
            lng: this.restaurants[0].location.lng,
          };
        });
    },
      err => console.log('HTTP Error', err),
      () => console.log('HTTP request completed.')
    );
  }

  /**
   * This is a function to show long description of restaurant on modal popup.
   * @author Abhinav Rajpurohit
   * @version 1.0.0
   * @param object value - restaurant detail
   * @return Return a Modal pop with restaurant name and description
   * @example
   * showFullDescription({name: 'abc', description: 'This is a very nice place to visit nearby location.'})
   */
  showDescription(restaurant) {
    const modalRef = this.modalService.open(MymodalComponent);
    modalRef.componentInstance.myModalTitle = restaurant.name;
    modalRef.componentInstance.myModalContent = restaurant.description;
  }

}
