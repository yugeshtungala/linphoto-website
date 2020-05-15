  import { Component, OnInit, Input } from '@angular/core';
import { Userdatatype } from '../../classes/userdatatype';
import { UserDetailsService } from '../../services/user-details.service';
import { del } from '../../animations/fadein-out';


@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css'],
  animations:[del]
})
export class UserListComponent implements OnInit {
 //variable used to display data in html
  gettingUserData:Userdatatype[]
 Emessage:string;
 
  //injecting service to constructer
  constructor(private service:UserDetailsService) { }
  //getting data from the service
  getUsers(){
    this.service.getUserLists().subscribe(
      (data:Userdatatype[]) =>{this.gettingUserData =data},
      (error)=>{this.Emessage=error}
      )
  }
  //delete method
  deleteUserData(id){
    this.service.deleteUser(id).subscribe(data => this.getUsers())     
   
  }
  ngOnInit(): void {
    this.getUsers()
   
 
  }


}
