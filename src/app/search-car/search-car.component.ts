import { Component, OnInit } from '@angular/core';
import { Car } from '../car';
import { CarService} from '../car.service';

@Component({
  selector: 'search-car',
  templateUrl: './search-car.component.html',
  styleUrls: ['./search-car.component.css']
})
export class SearchCarComponent implements OnInit {

  id: number;
  car : Car;

  constructor(private dataService: CarService) { }

  ngOnInit() {
    this.id = 0;
  }

  private searchCars(){
    this.dataService.getCarsByid(this.id).subscribe(car => this.car = car);
  }

  onSubmit(){
    this.searchCars();
   }
}
