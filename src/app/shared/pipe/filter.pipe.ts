/*
* Filter Pipe with Dependencies
*/
import { Pipe, PipeTransform } from '@angular/core';
/*
* Pipe Decorator with its metadata
*/
@Pipe({
  name: 'filter'
})
/*
* Filter Pipe Class Declaration
*/
export class FilterPipe implements PipeTransform {

  /**
   * This is a filter transform function in pipe.
   * @author Abhinav Rajpurohit
   * @version 1.0.0
   * @param array value - list of items
   * @param string value - string for which to filter the list
   * @return Return a filtered list of items as per given string
   * @example
   * transform([{name: abhinav},{name: raj}], 'hi')
   */
  transform(items: any[], searchText: string): any[] {
    if (!items) {
      return [];
    }

    if (!searchText) {
      return items;
    }

    // Filtering list with given string
    searchText = searchText.toLowerCase();
    return items.filter( item => {
      return item.name.toLowerCase().includes(searchText);
    });
  }

}

