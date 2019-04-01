import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-search',
  template: `
    <main>
      <div fxLayout="column" fxLayoutAlign="center center">
        <div fxLayout="column" fxLayoutAlign="center center">
          <label for="search">Search Utils:</label>
          <input type="search" id="search" name="search" class="search-box" />
        </div>
      </div>
    </main>
  `,
  styles: [
    `
      .search-box {
      }
    `
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SearchComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
