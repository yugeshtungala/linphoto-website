import { NgModule } from '@angular/core';
import { AppRoutingModule } from '../../app-routing.module';
//imported all the created  components

import { NavbarComponent } from './pages/navbar/navbar.component';
import { HeaderComponent } from './pages/header/header.component';
import { BodyComponent } from './pages/body/body.component';
import { FooterComponent } from './pages/footer/footer.component';
import { ContactusComponent } from './pages/navbar/nav-list/contactus/contactus.component';
import { AboutusComponent } from './pages/navbar/nav-list/aboutus/aboutus.component';
import { ForumComponent } from './pages/navbar/nav-list/forum/forum.component';
import { HomeComponent } from './pages/navbar/nav-list/home/home.component';
import { BlogComponent } from './pages/navbar/nav-list/blog/blog.component';
import { GallaryComponent } from './pages/navbar/nav-list/gallary/gallary.component';
import { LoginComponent } from './forms/login/login.component';
import { RigisterComponent } from './forms/rigister/rigister.component';
import { UserListComponent } from './form/user-list/user-list.component';
import { EditUserComponent } from './forms/edit-user/edit-user.component';
//imported htttp module
import { HttpClientModule }    from '@angular/common/http';
//imported shared component which contains all the form modules  + pips 
import { SharedModule } from './shared/shared.module';
//imported BrowserAnimationsModule from angular/platform-browser/animations
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';



/* 
Created By: yugesh
Created on:31-03-2020
Project Name: Lin-Photo
*/ 

@NgModule({
  // declared all the components
  declarations: [NavbarComponent, HeaderComponent, BodyComponent, FooterComponent, ContactusComponent, AboutusComponent, ForumComponent, HomeComponent, LoginComponent,BlogComponent, GallaryComponent, RigisterComponent, UserListComponent, EditUserComponent],
  imports: [
    //imported shared & AppRoutingModule HttpClientModule ,BrowserAnimationsModule
    SharedModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule
  ],
  exports:[
    //exported main components to display
    NavbarComponent,HeaderComponent,FooterComponent,BodyComponent
  ]
})
export class LayoutModule { }
