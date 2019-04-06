import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormFieldComponent } from './form-field.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormInputDirective } from './form-input.directive';

@NgModule({
  declarations: [FormFieldComponent, FormInputDirective],
  imports: [CommonModule, FlexLayoutModule],
  exports: [FormFieldComponent, FormInputDirective]
})
export class FormFieldModule {}
