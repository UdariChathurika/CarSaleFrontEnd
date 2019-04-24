import { NgModule } from '@angular/core';
import { RouterModule,Routes } from '@angular/router';
import { CarListComponent } from './car-list/car-list.component';
import { CreateCarComponent } from './create-car/create-car.component';
import { SearchCarComponent } from './search-car/search-car.component';
 
const routes: Routes = [
  { path: '',redirectTo:'car',pathMatch:'full'},
  { path: 'car', component:CarListComponent},
  { path: 'add',component:CreateCarComponent},
  { path: 'findbyid',component:SearchCarComponent},
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports:[RouterModule]
})
export class AppRoutingModule { }
