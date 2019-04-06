import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MiddleLayoutComponent } from './middle-layout.component';
import { FlexLayoutModule } from '@angular/flex-layout';

@NgModule({
  declarations: [MiddleLayoutComponent],
  imports: [CommonModule, FlexLayoutModule],
  exports: [MiddleLayoutComponent]
})
export class MiddleLayoutModule {}
