import { Component, OnInit } from '@angular/core';
import { ServicesService } from '../services/shared/services.service';



@Component({
  selector: 'app-botones',
  templateUrl: './botones.component.html',
  styleUrls: ['./botones.component.css'],
  providers:[BotonesComponent]
})
export class BotonesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  
}
