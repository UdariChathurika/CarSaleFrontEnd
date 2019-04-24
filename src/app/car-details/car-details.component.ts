import { Component, OnInit, Input } from '@angular/core';
import { CarService } from '../car.service';
import { Car } from '../car';
 
import { CarListComponent } from '../car-list/car-list.component';
 
@Component({
  selector: 'car-details',
  templateUrl: './car-details.component.html',
  styleUrls: ['./car-details.component.css']
})
export class CarDetailsComponent implements OnInit {
 
  @Input() car: Car;
  id: number;
  notupdated = false;
  
  
  constructor(private carService: CarService, private listComponent: CarListComponent) { }
 
  ngOnInit() {
    this.id = 0;        
  }
 
  deleteCar() {
    this.carService.deleteCar(this.car.id)
      .subscribe(
        data => {
          console.log(data);
          this.listComponent.reloadData();
        },
        error => console.log(error));
  }

  updateCar(){
    this.notupdated = true;    
    this.carService.getCarsByid(this.id).subscribe(
      data => {
        console.log(this.car);
      },
      error => console.log(error));
    
      }

  saveCar(){
    this.carService.createCar(this.car).subscribe(data => console.log(this.car),error => console.log(error)); 
    this.notupdated = false;        
  }
      
}