import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormFieldModule } from '../../shared/form-field/form-field.module';
import { ManualLinkModule } from '../../shared/manual-link/manual-link.module';
import { MiddleLayoutModule } from '../../shared/middle-layout/middle-layout.module';
import { WiresRoutingModule } from './wires-routing.module';
import { WiresComponent } from './wires.component';

@NgModule({
  declarations: [WiresComponent],
  imports: [
    CommonModule,
    WiresRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MiddleLayoutModule,
    FormFieldModule,
    ManualLinkModule
  ]
})
export class WiresModule {}
