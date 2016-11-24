import { Component, OnInit } from '@angular/core';
import { CarPart } from './car-part';
import { CARPARTS } from './mocks';

@Component({
  selector: 'car-parts',
  templateUrl: './car-parts.component.html',
  styleUrls: ['./car-parts.component.css','./bootstrap.min.css'],
})
export class CarPartsComponent implements OnInit {
  carParts: CarPart[];

  constructor() { }

  ngOnInit() {
  this.carParts = CARPARTS;
  }

  totalCarParts(){
    let sum = 0;
    for(let car of  this.carParts){
      sum += car.inStock;
    }
    return sum;
  };
  upQuantity(carPart){
    if (carPart.quantity <carPart.inStock) carPart.quantity++;
  }
  downQuantity(carPart){
    if (carPart.quantity !=0) carPart.quantity--;
  }

}
