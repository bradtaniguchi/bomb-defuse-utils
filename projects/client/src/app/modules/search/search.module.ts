import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SearchRoutingModule } from './search-routing.module';
import { SearchComponent } from './search.component';
import { FlexLayoutModule } from '@angular/flex-layout';

@NgModule({
  declarations: [SearchComponent],
  imports: [CommonModule, SearchRoutingModule, FlexLayoutModule]
})
export class SearchModule {}
