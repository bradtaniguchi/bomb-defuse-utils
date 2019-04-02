import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SearchRoutingModule } from './search-routing.module';
import { SearchComponent } from './search.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule } from '@angular/forms';
@NgModule({
  declarations: [SearchComponent],
  imports: [CommonModule, SearchRoutingModule, FormsModule, FlexLayoutModule]
})
export class SearchModule {}
