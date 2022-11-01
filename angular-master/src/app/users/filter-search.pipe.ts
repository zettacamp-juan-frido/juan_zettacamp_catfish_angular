import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterSearch',
})
export class FilterSearchPipe implements PipeTransform {
  transform(value: string, ...args: unknown[]): string {
    return value.toLocaleLowerCase().trim();
  }
  // transform(value: any, filterString: string, propName: string): any {
  //   if (value.length === 0 || filterString === '') {
  //     return value;
  //   }
  //   const resultArray = [];
  //   for (const item of value) {
  //     if (item[propName] === filterString) {
  //       resultArray.push(item);
  //     }
  //   }
  //   return resultArray;
  // }
}
