import { Component, OnInit } from '@angular/core';
import { fade } from '../../animations/fadein-out';


@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css'],
  animations:[ fade ]
})
export class BodyComponent implements OnInit {

showData:boolean=true //boolean for displying data1
showData2:boolean=true //boolean for displying data2
showData3:boolean=true //boolean for displying data2
showData4:boolean=true //boolean for displying data2
  showMore:boolean=true //boolean for displying data
  constructor() { }
  // click event to dinamically display data
  show(){
     this.showData=!this.showData
  }
    // click event to dinamically display data
  show2(){
    this.showData2=!this.showData2
 }
   // click event to dinamically display data
 show3(){
  this.showData3=!this.showData3
}
  // click event to dinamically display data
show4(){
  this.showData4=!this.showData4
}
showList(){
  this.showMore=!this.showMore
}
  ngOnInit(): void {
  }

}
