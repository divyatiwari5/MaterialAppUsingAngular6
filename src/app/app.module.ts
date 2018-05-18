import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { MatInputModule, MatAutocompleteModule, MatFormFieldModule, MatCheckboxModule, MatSidenavModule } from '@angular/material';
import { ReactiveFormsModule } from '@angular/forms';
import { MatCompComponent } from './mat-comp/mat-comp.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavbarComponent } from './navbar/navbar.component';


@NgModule({
  declarations: [
    AppComponent,
    MatCompComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule, FormsModule, BrowserAnimationsModule, MatCheckboxModule, MatSidenavModule,
    ReactiveFormsModule, MatAutocompleteModule,  MatInputModule, MatFormFieldModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
