import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class ServicesService {
  
  constructor() { }

  suma(val1: number,val2: number){
    return val1 + val2;
  }

  resta(val1: number,val2: number){
    return val1 - val2;
  }

  multiplicar(val1: number,val2: number){
    return val1 * val2;
  }

  dividir(val1: number,val2: number){
    return val1 / val2;
  }
}
