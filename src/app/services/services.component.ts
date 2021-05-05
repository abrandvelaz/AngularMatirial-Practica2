import { Component, OnInit } from '@angular/core';
import { ServicesService } from './shared/services.service';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css'],
  providers: [ServicesComponent]

})
export class ServicesComponent implements OnInit {

  rta: number;
  val1: number;
  val2: number;

  constructor(private services: ServicesService) { }

  ngOnInit(): void {
  }

  op1(){
    this.rta = this.services.suma(this.val1,this.val2);
  }

  op2(){
    this.rta = this.services.resta(this.val1,this.val2);
  }

  op3(){
    this.rta = this.services.multiplicar(this.val1,this.val2);
  }

  op4(){
    this.rta = this.services.dividir(this.val1,this.val2);
  }

}
