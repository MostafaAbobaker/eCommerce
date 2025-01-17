import { Pipe, PipeTransform } from '@angular/core';
import { IProduct } from '../interfaces/iproduct';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(products:IProduct[] , trimText:string): IProduct[]  {
    return products.filter(product => product.title.includes(trimText) );
  }

}
