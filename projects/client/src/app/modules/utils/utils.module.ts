import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UtilsRoutingModule } from './utils-routing.module';
import { UtilsComponent } from './utils.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MiddleLayoutModule } from '../../shared/middle-layout/middle-layout.module';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [UtilsComponent],
  imports: [
    CommonModule,
    UtilsRoutingModule,
    FlexLayoutModule,
    MiddleLayoutModule,
    RouterModule
  ]
})
export class UtilsModule {}
