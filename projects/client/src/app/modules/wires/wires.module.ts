import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WiresRoutingModule } from './wires-routing.module';
import { WiresComponent } from './wires.component';

@NgModule({
  declarations: [WiresComponent],
  imports: [
    CommonModule,
    WiresRoutingModule
  ]
})
export class WiresModule { }
