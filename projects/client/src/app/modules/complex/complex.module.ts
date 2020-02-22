import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AnswerBoxModule } from '../../shared/answer-box/answer-box.module';
import { FormFieldModule } from '../../shared/form-field/form-field.module';
import { ManualLinkModule } from '../../shared/manual-link/manual-link.module';
import { MiddleLayoutModule } from '../../shared/middle-layout/middle-layout.module';
import { ComplexRoutingModule } from './complex-routing.module';
import { ComplexComponent } from './complex.component';

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
    AnswerBoxModule,
    ManualLinkModule
  ]
})
export class ComplexModule {}
