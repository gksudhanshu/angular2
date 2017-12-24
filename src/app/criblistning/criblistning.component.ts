import { Component, OnInit } from '@angular/core';
import {cribs} from './../data/cribs';

@Component({
  selector: 'app-criblistning',
  templateUrl: './criblistning.component.html',
  styleUrls: ['./criblistning.component.css']
})
export class CriblistningComponent implements OnInit {

  cribs: Array<any>=cribs;
  constructor() { }

  ngOnInit() {
  }

}
