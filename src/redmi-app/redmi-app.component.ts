import { Component, OnInit } from '@angular/core';
import { RedmiDetailsComponent } from './redmi-details/redmi-details.component';
import { RedmiComponent } from './redmi/redmi.component';

@Component({
  standalone:true,
  selector: 'app-redmi-app',
  templateUrl: './redmi-app.component.html',
  styleUrls: ['./redmi-app.component.css'],
  imports:[RedmiComponent,RedmiDetailsComponent]
})
export class RedmiAppComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}