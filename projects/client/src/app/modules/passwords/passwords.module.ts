import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormFieldModule } from '../../shared/form-field/form-field.module';
import { ManualLinkModule } from '../../shared/manual-link/manual-link.module';
import { MiddleLayoutModule } from '../../shared/middle-layout/middle-layout.module';
import { PasswordsRoutingModule } from './passwords-routing.module';
import { PasswordsComponent } from './passwords.component';

@NgModule({
  declarations: [PasswordsComponent],
  imports: [
    CommonModule,
    PasswordsRoutingModule,
    FormsModule,
    FlexLayoutModule,
    ReactiveFormsModule,
    MiddleLayoutModule,
    FormFieldModule,
    ManualLinkModule
  ]
})
export class PasswordsModule {}
