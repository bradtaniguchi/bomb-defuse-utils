import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Form } from '@angular/forms';

@Component({
  selector: 'app-search',
  template: `
    <main>
      <form novalidate #form="ngForm" (submit)="onSubmit(form)">
        <div fxLayout="column" fxLayoutAlign="center center">
          <div
            fxLayout="column"
            fxLayoutAlign="center center"
            class="half-width"
          >
            <label for="search">Search Utils:</label>
            <div fxLayout="row" class="full-width">
              <input
                type="text"
                id="search"
                name="search"
                [(ngModel)]="search"
                #_search="ngModel"
                class="search-box full-width"
              />
              <button type="button">
                Search
              </button>
            </div>
          </div>
        </div>
      </form>
    </main>
  `,
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SearchComponent implements OnInit {
  public search: string;
  constructor() {}

  ngOnInit() {}
  public onSubmit(form: Form) {
    console.log('test in form:', form);
  }
}
