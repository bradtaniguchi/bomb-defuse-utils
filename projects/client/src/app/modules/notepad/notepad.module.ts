import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule } from '@angular/forms';
import { MiddleLayoutModule } from '../../shared/middle-layout/middle-layout.module';
import { NotepadRoutingModule } from './notepad-routing.module';
import { NotepadComponent } from './notepad.component';

@NgModule({
  declarations: [NotepadComponent],
  imports: [
    CommonModule,
    NotepadRoutingModule,
    FlexLayoutModule,
    MiddleLayoutModule,
    FormsModule,
  ],
})
export class NotepadModule {}
