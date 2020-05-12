/*
* HTTP Service with Dependencies
*/
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Restaurant } from '../interfaces/restaurant';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
/*
* Http API Service
*/
export class HttpService {

  // Base url
  baseurl = 'http://localhost:4200';

  /*
  * Service Constructor
  */
  constructor(private http: HttpClient) { }

  // Http Headers
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  /**
   * This is a get function in service.
   * @author Abhinav Rajpurohit
   * @version 1.0.0
   * @param string value - api url
   * @return Return a observable
   * @example
   * GetAll('http://abc.com')
   */
  GetAll(apiUrl): Observable<Restaurant> {
    return this.http.get<Restaurant>(this.baseurl + apiUrl)
      .pipe(
        retry(1),
        catchError(this.errorHandle)
      );
  }

  /**
   * This is a error handling function in service.
   * @author Abhinav Rajpurohit
   * @version 1.0.0
   * @param object - error object
   * @return throw a error
   * @example
   * errorHandle({error: {message: 'Error in ...'}})
   */
  errorHandle(error) {
    // Differentiate between client and server side error
    const errorMessage = (error.error instanceof ErrorEvent) ? error.error.message :
      `Error Code: ${error.status}\nMessage: ${error.message}`;
    return throwError(errorMessage);
  }

}


