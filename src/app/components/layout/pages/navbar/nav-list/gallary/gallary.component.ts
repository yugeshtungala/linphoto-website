import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gallary',
  templateUrl: './gallary.component.html',
  styleUrls: ['./gallary.component.css']
})
export class GallaryComponent implements OnInit {
  
  showData:boolean=true //boolean for displying data1
  showData2:boolean=true //boolean for displying data2
  showData3:boolean=true //boolean for displying data2
  showData4:boolean=true //boolean for displying data2
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
  
  ngOnInit(): void {
  }

}
