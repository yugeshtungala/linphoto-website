import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'; //imported  FormsModule, ReactiveFormsModule  from '@angular/forms'
import { DatePipe } from '../forms/pipes/date.pipe';//imported DatePipe  from /forms/pipes/date.pipe;
import { TypePipe } from '../forms/pipes/type.pipe';//imported TypePipe  from /forms/pipes/TypePipe
import { NamePipe } from '../forms/pipes/name.pipe';//imported  NamePipe from /forms/pipes/name.pipe
/* 
Created By: yugesh
Created on:31-03-2020
Project Name: Lin-Photo
*/ 


@NgModule({
  declarations: [DatePipe, TypePipe, NamePipe],
  imports: [
    CommonModule,
    // imported forms module , reactive forms module
    FormsModule,
    ReactiveFormsModule,
  ],
  //exporting components to display in browser
  exports:[ CommonModule,FormsModule,
    ReactiveFormsModule,DatePipe, TypePipe, NamePipe]
})
export class SharedModule { }
