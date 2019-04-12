import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PasswordsRoutingModule } from './passwords-routing.module';
import { PasswordsComponent } from './passwords.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MiddleLayoutModule } from '../../shared/middle-layout/middle-layout.module';
import { FormFieldModule } from '../../shared/form-field/form-field.module';
import { FlexLayoutModule } from '@angular/flex-layout';

@NgModule({
  declarations: [PasswordsComponent],
  imports: [
    CommonModule,
    PasswordsRoutingModule,
    FormsModule,
    FlexLayoutModule,
    ReactiveFormsModule,
    MiddleLayoutModule,
    FormFieldModule
  ]
})
export class PasswordsModule {}
