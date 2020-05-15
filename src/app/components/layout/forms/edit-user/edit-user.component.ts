import { Component, OnInit } from '@angular/core';
//importing form builder ,validator from
import { FormBuilder, Validators } from '@angular/forms';
//importing custum validator /custum-validadtors/dateofbirth-validator'
import { dateValidator } from '../custum-validadtors/dateofbirth-validator';
//importing passwordValidator custum-validadtors/cross-field-validadtors
import { passwordValidator } from '../custum-validadtors/cross-field-validadtors';
//importing UserDetailsService services/user-details.service
import { UserDetailsService } from '../../services/user-details.service';
//importing Router, ActivatedRoute from '@angular/router'
import { Router, ActivatedRoute } from '@angular/router';
//importing Userdatatype from classes/userdatatype
import { Userdatatype } from '../../classes/userdatatype';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css']
})
export class EditUserComponent implements OnInit {


  //  variable (submit) :variable data type =variable-condition
  id = +this.activatedroute.snapshot.params['id'] //declaring activated route to add

  submit: boolean = false; // i am using this flag to display only error messages seperatly
  userUpdateData = {}
  // it is parameter of an array method that is used to remove an array by index formet
  i: number
  // its a constructor in this we need to import form builder & router 
  constructor(private formbuilder: FormBuilder, private service: UserDetailsService, private route: Router, private activatedroute: ActivatedRoute) { }

  // here we add all the requirements , custom & all inbuilt validation 
  registrationForm = this.formbuilder.group({
    fname: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(20), Validators.pattern("^[a-zA-Z]{4,12}$")]], //here i added in bult validations like minlength & max length name patterns
    lname: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(20), Validators.pattern("^[a-zA-Z]{4,12}$")]], //here i added in bult validations like minlength &max length name patterns
    email: ['', [Validators.required, Validators.maxLength(25), Validators.email]],//here i added in bult validations like minlength & max length email patterns
    number: ['', [Validators.required, Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")]],//here i added in bult validations like minlength &max length and also password pattern with numbercapitalslower lettersany special charactermin 8 characters
    gender: ['', Validators.required], //gender
    dob: ['', [Validators.required, dateValidator(21, 50)]],// its a custom validator for date of birth with two parametrs (min & max)
    password: ['', [Validators.required, Validators.maxLength(20), Validators.pattern('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$#^!%*?&])[A-Za-z\d$@$!%*?&].{8,}$')]],//here i added in bult validations like minlength &max length and also password pattern with number capitals lowerletters any special character min 8 characters
    reenter_password: ['', Validators.required],  //here i entered renterpassword
    // form group starts it contains address pattern
    address: this.formbuilder.group({
      country: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(20), Validators.pattern('[a-zA-Z \-\']+')]], // here i added required , max length & min length in built validadtors
      state: ['', [Validators.required],], // here i added required in built validadtor
      city: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(20), Validators.pattern('[a-zA-Z \-\']+')]], // here i added required , max length & min length in built validadtors
      street: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(20), Validators.pattern('[a-zA-Z \-\']+')]], // here i added required , max length & min length in built validadtors

      pincode: ['', [Validators.required, Validators.pattern("^[0-6]{6}$")]], // pattern for pincode & required
      landmark: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(30), Validators.pattern('[a-zA-Z \-\']+')]], // here i added required , max length & min length in built validadtors

    }),
    terms: ['', Validators.requiredTrue], //terms and conditions 

  },
    { validators: passwordValidator }     //this is custom validation for password matching validator (cross-field validaters)
  );

  // gender array that contains three fields
  genders = ['male', 'female', 'others'];
  // states array it contains all states and it  is displayed in templete by using ngfor loop
  states = ['Jammu and Kashmir', 'Punjab', 'Himachal Pradesh', 'Haryana', 'Delhi', 'Rajasthan', 'Uttar Pradesh', 'Uttarakhand', 'Madhya Pradesh', 'Chattisgarh', 'Gujarat', 'Maharashtra', 'Karnataka', 'Goa', 'Kerala', 'Tamil nadu', 'Andhra pradesh', 'Telangana', 'Orissa', 'Bihar', 'Jharkhand', 'West Bengal', 'Assam', 'Arunach Pradesh', 'Sikkim', 'Meghalaya', 'Mizoram', 'Nagaland', 'Tripura']
  // it is a getter for number
  get number() {
    return this.registrationForm.get('number')
  }

  // it is a getter for number
  get gender() {
    return this.registrationForm.get('gender')
  }

  // it is a getter for dob
  get dob() {
    return this.registrationForm.get('dob')
  }

  // it is a getter for password
  get password() {
    return this.registrationForm.get('password')
  }

  // it is a getter for reenter_password
  get reenter_password() {
    return this.registrationForm.get('reenter_password')
  }

  message: string //error message
  // it is to submit form 
  onSubmit() {
    // it is variable when we click submit button now its become true
    this.submit = true // now its true then it ready to display the only error data
    // if registrationForm is invalid this statement returns an error
    // if form is in valid
    if (this.registrationForm.invalid) {

      return
    } else {
      //here declaring registrationForm values to userUpdateData object
      this.userUpdateData = this.registrationForm.value
         // here this page will automatically navigate into login page within 3 seconds
      this.service.update(this.id, this.userUpdateData).subscribe(() => setTimeout(() => {this.route.navigate(['user']);}, 3000),  )
   
    }
  }


  ngOnInit(): void {

    this.service.getUserId(this.id).subscribe((data: Userdatatype) => {
      //declared data to userUpdateData object
      this.userUpdateData = data;
      this.registrationForm.patchValue(this.userUpdateData)
    },
      //  error message
      (err) => this.message = err
    )
  }
}
