import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Login } from '../../classes/login';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginMessage;
// in constructer i declared the router with router 
constructor(private router:Router) { }

employeesLogin = new Login('',''); // its a model instance  for employee login form
// its a submit
submit(userForm:NgForm){
// if submit gets invalid it should return 
if(userForm.invalid){
  return 
}
else
//when user enters valid data then submit get navigate to home page
this.loginMessage="redirecting to home page "
setInterval(()=>{
  this.router.navigate(['/home']);
},5000)
 
}

  ngOnInit(): void {
  }

}
