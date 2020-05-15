import { AbstractControl } from '@angular/forms';
// import abstract control here from angular forms
// export class

export function passwordValidator(control:AbstractControl):{[Key:string]:Boolean}|null{
    //creating a variable named password and assigning value to it by getter
    const password = control.get('password');
    // creating another named reenter_password and  variable and assigning value to it
    const reenter_password = control.get('reenter_password');
    // if the password field is doesnt modified or untouched it should return null
    if( (reenter_password.pristine && reenter_password.untouched)){
        return null
    }
    // if the two variables are doesnt match each other ...the error name mismatch gets true or it returns
    return password && reenter_password && password.value !== reenter_password.value ?  {'mismatch':true} :null
}