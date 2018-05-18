import { Component, OnInit } from '@angular/core';
import {FormControl} from '@angular/forms';
import { Observable} from 'rxjs';
import {map, startWith} from 'rxjs/operators';


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
      'Option3',
    'number',
    'mammal'
  ];


  filteredOptions: Observable<string[]>;

  ngOnInit() {
    this.filteredOptions = this.form_control.valueChanges
      .pipe(startWith(''),
       map(val => this.filter(val)));
  }

  filter(val: string): string[] {
    return this.Options.filter(option => option.toLowerCase().includes(val.toLowerCase()));

  }
}
