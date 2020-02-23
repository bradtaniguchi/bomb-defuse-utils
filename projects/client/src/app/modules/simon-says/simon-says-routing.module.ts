import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SimonSaysComponent } from './simon-says.component';

const routes: Routes = [
  {
    path: '',
    component: SimonSaysComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SimonSaysRoutingModule {}
