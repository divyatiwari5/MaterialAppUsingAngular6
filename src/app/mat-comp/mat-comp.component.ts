import { Component, OnInit } from '@angular/core';
import {FormControl, FormsModule} from '@angular/forms';

@Component({
  selector: 'app-mat-comp',
  templateUrl: './mat-comp.component.html',
  styleUrls: ['./mat-comp.component.css']
})
export class MatCompComponent implements OnInit {

  form_control: FormControl = new FormControl();

  Options = [
     'Option1',
      'Option2',
      'Option3'
  ];
  constructor() { }

  ngOnInit() {
  }
}
