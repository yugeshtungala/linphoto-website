import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
// imported app routing  module

import { LayoutModule } from './components/layout/layout.module';
import { AppComponent } from './app.component';
//import layout component
import { LayoutComponent } from './components/layout/layout.component';
// imported app routing m odule
import { LayoutRoutingModule } from './components/layout/layout-routing.module';
//imported shared module
import { SharedModule } from './components/layout/shared/shared.module';

/* 
Created By: yugesh
Created on:31-03-2020
Project Name: Lin-Photo
*/ 
@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    //imported LayoutModule, LayoutRoutingModule, SharedModule
    LayoutModule,
    LayoutRoutingModule,
    SharedModule
 ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
