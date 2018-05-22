import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {Routes} from '@angular/router';
import {AppComponent} from '../App-root/app.component';
import {NavbarComponent} from '../navbar/navbar.component';
import {ResponsiveNavbarComponent} from '../responsive-navbar/responsive-navbar.component';

const routes: Routes = [
  { path: '', component: AppComponent },
  { path: 'navbar', component: NavbarComponent},
  { path: 'responsive', component: ResponsiveNavbarComponent}
];

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: []
})
export class AppRoutingModule { }
