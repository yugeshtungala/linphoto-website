import { ValidatorFn, AbstractControl, ValidationErrors } from '@angular/forms';
// imprting ValidatorFn, AbstractControl, ValidationErrors  from angular form
//  in function  i given two parameter that takes a age that given in ts file
export function dateValidator(minAge:number, maxAge:number):ValidatorFn {
    // here i returning an abstractcontrol and returning a failed validation errors or returning null
    
    return (control:AbstractControl):ValidationErrors | null => {
        // if user doesn't enter any data
        if(!control.value)
        // it returns null
        return null;
//    i am getting a todays date using js new Date().getFullYear()
    const today =  new Date().getFullYear()
    // here i taking a users entered date by passing a parameter in date
    const givenDate = new Date(control.value).getFullYear()
    // here i substracting the taday date & user's entered date
   const calculateDate= today - givenDate;
// here i given a condition when user enter age above 21 && below 50 
   if(calculateDate >= minAge && calculateDate <= maxAge)
//    it returns null
   return null;
   else{
    //    or else it returns validation false
       return { minAge: {valid : false} }
   }
    }
}