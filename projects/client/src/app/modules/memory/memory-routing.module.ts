import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MemoryComponent } from './memory.component';

const routes: Routes = [
  {
    path: '',
    component: MemoryComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MemoryRoutingModule {}
