import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'type'
})
export class TypePipe implements PipeTransform {

 // in transform i added two arguments
 transform(value: string, arg1:string): string {
  // here i taken if else statement for three check box
  // if user clicks on male
  if(arg1.toLocaleLowerCase() == 'male'){
    // it returns mr
    return "Mr. "+ value;
  }
     // if user clicks on female
  else if(arg1.toLocaleLowerCase()=='female') {
    // it returns miss
  return "Miss. " +value;
  }
     // if user clicks on others
  else{
    // it returns T.G
    return 'TG.' +value;
  }
}


}
