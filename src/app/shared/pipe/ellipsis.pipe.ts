/*
* Ellipsis Pipe with Dependencies
*/
import { Pipe, PipeTransform } from '@angular/core';
/*
* Pipe Decorator with its metadata
*/
@Pipe({
  name: 'ellipsis'
})
/*
* Ellipsis Pipe Class Declaration
*/
export class EllipsisPipe implements PipeTransform {

  /**
   * This is a transform function in pipe.
   * @author Abhinav Rajpurohit
   * @version 1.0.0
   * @param string value - text description
   * @param number value - limit to which to show ellipsis
   * @return Return a small text or text with ... (ellipsis text)
   * @example
   * transform('abcdefghijklmnopqrstuvwxyz', 30)
   */
  transform(value: any, args: any): any {
    return (value && value.length > args) ? `${value.substring(0, args)}...` : value;
  }

}
