import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WiresRoutingModule } from './wires-routing.module';
import { WiresComponent } from './wires.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MiddleLayoutModule } from '../../shared/middle-layout/middle-layout.module';
import { FormFieldModule } from '../../shared/form-field/form-field.module';

@NgModule({
  declarations: [WiresComponent],
  imports: [
    CommonModule,
    WiresRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MiddleLayoutModule,
    FormFieldModule
  ]
})
export class WiresModule {}
