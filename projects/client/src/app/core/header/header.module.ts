import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { RouterModule } from '@angular/router';
@NgModule({
  declarations: [HeaderComponent],
  imports: [CommonModule, FlexLayoutModule, RouterModule],
  exports: [HeaderComponent]
})
export class HeaderModule {}
