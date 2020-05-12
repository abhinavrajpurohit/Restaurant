/*
* Importing Pipes
*/
import { EllipsisPipe } from './ellipsis.pipe';
import { FilterPipe } from './filter.pipe';

export const pipes: any[] = [EllipsisPipe, FilterPipe];

/*
* Exporting Pipes
*/
export * from './ellipsis.pipe';
export * from './filter.pipe';
