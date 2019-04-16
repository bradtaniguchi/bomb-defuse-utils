import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ComplexRoutingModule } from './complex-routing.module';
import { ComplexComponent } from './complex.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MiddleLayoutModule } from '../../shared/middle-layout/middle-layout.module';
import { FormFieldModule } from '../../shared/form-field/form-field.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { AnswerBoxModule } from '../../shared/answer-box/answer-box.module';

@NgModule({
  declarations: [ComplexComponent],
  imports: [
    CommonModule,
    ComplexRoutingModule,
    FormsModule,
    FlexLayoutModule,
    ReactiveFormsModule,
    MiddleLayoutModule,
    FormFieldModule,
    AnswerBoxModule
  ]
})
export class ComplexModule {}
