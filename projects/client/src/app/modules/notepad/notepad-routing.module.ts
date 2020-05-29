import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NotepadComponent } from './notepad.component';


const routes: Routes = [
  {
    path: '',
    component: NotepadComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NotepadRoutingModule { }
