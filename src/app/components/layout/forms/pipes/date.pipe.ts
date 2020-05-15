import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'date'
})
export class DatePipe implements PipeTransform {

// in transform i added one argument type any
transform(value: any): any {
  // here i  created a empty variable and i declared a predefined javascript method to that
  
      let currentYear:any = new Date().getFullYear()
  // here i again created a empty variable and i declared a predefined javascript method to that
  
      let userYear:any = new Date(value).getFullYear();
      // again taken an variable called age & now in that i substracted both the variables
      let age = currentYear-userYear;
      // now i am returning age
      return age;
    }
  
}
