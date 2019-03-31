import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header.component';
import { FlexLayoutModule } from '@angular/flex-layout';
@NgModule({
  declarations: [HeaderComponent],
  imports: [CommonModule, FlexLayoutModule],
  exports: [HeaderComponent]
})
export class HeaderModule {}
