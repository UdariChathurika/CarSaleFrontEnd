import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs';

import {CarService} from '../car.service'
import {Car} from '../car'

@Component({
  selector: 'car-list',
  templateUrl: './car-list.component.html',
  styleUrls: ['./car-list.component.css']
})
export class CarListComponent implements OnInit {

  cars: Observable<Car[]>;

  constructor(private carService: CarService){}

  ngOnInit() {
    this.reloadData();
  }

  reloadData(){
    this.cars = this.carService.getCarList();
  }


}
