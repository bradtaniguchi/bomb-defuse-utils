import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ComplexRoutingModule } from './complex-routing.module';
import { ComplexComponent } from './complex.component';

@NgModule({
  declarations: [ComplexComponent],
  imports: [
    CommonModule,
    ComplexRoutingModule
  ]
})
export class ComplexModule { }
