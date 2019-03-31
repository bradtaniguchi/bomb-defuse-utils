import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WiresComponent } from './wires.component';

const routes: Routes = [
  {
    path: '',
    component: WiresComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WiresRoutingModule {}
