import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ReactiveFormsModule } from '@angular/forms';
import { FormFieldModule } from '../../shared/form-field/form-field.module';
import { MiddleLayoutModule } from '../../shared/middle-layout/middle-layout.module';
import { MemoryRoutingModule } from './memory-routing.module';
import { MemoryComponent } from './memory.component';
import { ManualLinkModule } from '../../shared/manual-link/manual-link.module';

@NgModule({
  declarations: [MemoryComponent],
  imports: [
    CommonModule,
    MemoryRoutingModule,
    FlexLayoutModule,
    ReactiveFormsModule,
    MiddleLayoutModule,
    FormFieldModule,
    ManualLinkModule
  ]
})
export class MemoryModule {}
