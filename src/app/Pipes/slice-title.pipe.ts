import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sliceTitle'
})
export class SliceTitlePipe implements PipeTransform {

  transform(title: string, sliceNum:number): string {
    return title.split(' ').slice(0,sliceNum).join(' ');
  }

}
