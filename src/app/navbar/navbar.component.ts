import {Component, OnInit} from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  events: string[] = [];
  opened: boolean;
  mode = new FormControl('over');

  private mobileQueryListener: () => void;

  constructor() {
    }
  ngOnInit() {
  }

}
