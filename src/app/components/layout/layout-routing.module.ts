import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
//imported routes and router module from @angular/router
import { Routes, RouterModule } from '@angular/router';
//exported all the components
import { HomeComponent } from './pages/navbar/nav-list/home/home.component';
import { AboutusComponent } from './pages/navbar/nav-list/aboutus/aboutus.component';
import { BlogComponent } from './pages/navbar/nav-list/blog/blog.component';
import { ContactusComponent } from './pages/navbar/nav-list/contactus/contactus.component';
import { ForumComponent } from './pages/navbar/nav-list/forum/forum.component';
import { GallaryComponent } from './pages/navbar/nav-list/gallary/gallary.component';
import { LoginComponent } from './forms/login/login.component';
import { RigisterComponent } from './forms/rigister/rigister.component';
import { UserListComponent } from './form/user-list/user-list.component';
import { EditUserComponent } from './forms/edit-user/edit-user.component';

/* 
Created By: yugesh
Created on:31-03-2020
Project Name: Lin-Photo
*/ 
const routes: Routes = [
// path is empty it will redircted to home page
  {path:'',redirectTo:'home',pathMatch:'full'},
  {path:'login',component: LoginComponent },
  {path:'register',component: RigisterComponent },
  {path:'home',component: HomeComponent ,data:{index:1} },
  {path:'gallery',component: GallaryComponent ,data:{index:2}},
  {path:'user',component: UserListComponent, data:{index:7} },
  {path:'edit/:id',component: EditUserComponent, data:{index:8}},
  {path:'blog',component:BlogComponent ,data:{index:3}},
  {path:'forum',component:ForumComponent ,data:{index:4}},
  {path:'aboutus',component:AboutusComponent,data:{index:5}},
  {path:'contactus',component:ContactusComponent,data:{index:6}}
  
];


@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes),
    CommonModule
  ],

  // imports: [RouterModule.forChild(routes)],
  // exports: [RouterModule]

//   imports: [RouterModule.forChild(routes),
// RouterModule]
})
export class LayoutRoutingModule { }
