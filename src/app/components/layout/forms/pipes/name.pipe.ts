import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'name'
})
export class NamePipe implements PipeTransform {

  // in transform i added two arguments
  transform(value: string, args:string ): string {
    //here i am returning two arguments
        return value+" " +args+" ";
      }
    

}
