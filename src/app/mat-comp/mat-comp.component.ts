import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup} from '@angular/forms';
import { Observable} from 'rxjs';
import {map, startWith} from 'rxjs/operators';
import {group} from '@angular/animations';


export interface GroupOption {
  letter: string;
  g_option: string[];
}

@Component({
  selector: 'app-mat-comp',
  templateUrl: './mat-comp.component.html',
  styleUrls: ['./mat-comp.component.css']
})


export class MatCompComponent implements OnInit {

  form_control: FormControl = new FormControl();
  formgroup: FormGroup = this.formbuild.group({
    groupoption: '',
  });

  GroupOptions: GroupOption[] = [
    {
      letter: 'A',
      g_option: ['Anamika', 'Amrita', 'Amaira', 'Aaeysha']
    },
    {
      letter: 'B',
      g_option: ['Basmandi', 'Besharam', 'Babitaji :D']
    },
    {
      letter: 'D',
      g_option: ['Divya', 'Divyajyoti']
    },
    {
      letter: 'H',
      g_option: ['Himanshu', 'Divyanshu']
    }
  ];
  Options = [
    'Option1',
    'Option2',
    'Option3',
    'number',
    'mammal'
  ];

  groupFilterOptions: Observable<GroupOption[]>;
  filteredOptions: Observable<string[]>;

  constructor(private formbuild: FormBuilder) {
  }

  ngOnInit() {
    this.filteredOptions = this.form_control.valueChanges
      .pipe(startWith(''),
        map(val => this.filter(val)));

    this.groupFilterOptions = this.formgroup.get('groupoption')!.valueChanges
      .pipe(startWith(''), map(value => this.GroupFilterFunction(value)));
  }

  filter(val: string): string[] {
    return this.Options.filter(option => option.toLowerCase().includes(val.toLowerCase()));

  }

  GroupFilterFunction(val: string): GroupOption[] {
    if (val) {
      return this.GroupOptions
        .map(group => ({letter: group.letter, g_option: this._filter(group.g_option, val)}))
        .filter(group => group.g_option.length > 0);
    }
    return this.GroupOptions;
  }
  private _filter(opt: string[], val: string) {
    const filterValue = val.toLowerCase();
    return opt.filter(item => item.toLowerCase().startsWith(filterValue));
  }
}

