import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ManualLinkModule } from '../../shared/manual-link/manual-link.module';
import { MiddleLayoutModule } from '../../shared/middle-layout/middle-layout.module';
import { SimonSaysRoutingModule } from './simon-says-routing.module';
import { SimonSaysComponent } from './simon-says.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { FormFieldModule } from '../../shared/form-field/form-field.module';

@NgModule({
  declarations: [SimonSaysComponent],
  imports: [
    CommonModule,
    SimonSaysRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    FormFieldModule,
    FlexLayoutModule,
    MiddleLayoutModule,
    ManualLinkModule
  ]
})
export class SimonSaysModule {}
