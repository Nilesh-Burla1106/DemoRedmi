import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { redmiinfo } from '../redmi-full-details';
import { RedmiHalfDetails } from '../redmi-half-details';
import { RedmiInsideboxComponent } from './redmi-insidebox/redmi-insidebox.component';

@Component({
  standalone:true,
  selector: 'app-redmi',
  templateUrl: './redmi.component.html',
  styleUrls: ['./redmi.component.css'],
  imports:[RedmiInsideboxComponent,CommonModule],
})
export class RedmiComponent implements OnInit {
  redmi:RedmiHalfDetails[]=[];
  constructor() { }

  ngOnInit() {
    this.redmi=redmiinfo;
  }

}