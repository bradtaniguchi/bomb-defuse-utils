import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ComplexComponent } from './complex.component';

const routes: Routes = [
  {
    path: '',
    component: ComplexComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ComplexRoutingModule {}
