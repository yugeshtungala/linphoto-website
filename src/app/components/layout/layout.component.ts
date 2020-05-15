import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {   zoomUpAnimation, keyFrameAnimation } from './animations/route-animation';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css'],
  animations:[keyFrameAnimation]
})
export class LayoutComponent implements OnInit {

  constructor() { }
  prepareRoute(outlet:RouterOutlet){
     return outlet && outlet.activatedRouteData && outlet.activatedRouteData['index']
  }
  // return outlet && outlet.activatedRouteData && outlet.activatedRouteData['animation'];

  ngOnInit(): void {
  }

}
