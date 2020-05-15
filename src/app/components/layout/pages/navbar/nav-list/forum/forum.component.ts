import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Route } from '@angular/compiler/src/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-forum',
  templateUrl: './forum.component.html',
  styleUrls: ['./forum.component.css']
})
export class ForumComponent implements OnInit {
  submitForm:boolean=false;
    constructor(private FormBuilder:FormBuilder,private route:Router) { }
    forum=this.FormBuilder.group({
      title:['',[Validators.required,Validators.minLength(3),Validators.maxLength(20)]],
      discription:['',[Validators.required,Validators.minLength(3),Validators.maxLength(20)]],
      terms:['',Validators.requiredTrue], //terms and conditions 
      
      
    })
    save(){
    
    //  this.submitForm=true
    if(this.forum.invalid){
     return this.submitForm=true;
    }else
    this.route.navigate(['/home'])
    
     
    }
  
  ngOnInit(): void {
    

  }


}
