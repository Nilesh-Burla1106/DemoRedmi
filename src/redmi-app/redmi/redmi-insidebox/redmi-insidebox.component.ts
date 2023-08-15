import { Component, Input, OnInit } from '@angular/core';
import { RedmiHalfDetails } from '../../redmi-half-details'

@Component({
  standalone:true,
  selector: 'app-redmi-insidebox',
  templateUrl: './redmi-insidebox.component.html',
  styleUrls: ['./redmi-insidebox.component.css']
})
export class RedmiInsideboxComponent implements OnInit {
  @Input() redmiHalfDetails!:RedmiHalfDetails;
  constructor() { }

  ngOnInit() {
  }

}