import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Form, UntypedFormGroup, UntypedFormBuilder } from '@angular/forms';
import { SearchRoutes } from '../../app-routing.module';
import { Observable } from 'rxjs';
import { map, debounceTime } from 'rxjs/operators';
import { SearchService } from '../../core/services/search/search.service';

@Component({
  selector: 'app-search',
  template: `
    <main>
      <form novalidate [formGroup]="form" (submit)="onSubmit(form)">
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
                formControlName="search"
                autocomplete="off"
                class="search-box full-width"
              />
              <button>
                Search
              </button>
            </div>
          </div>
        </div>
        <div fxLayout="column">
          <div *ngFor="let result of (results$ | async)">
            <a [routerLink]="['../', result.path]">{{ result.title }}</a>
          </div>
        </div>
      </form>
    </main>
  `,
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SearchComponent implements OnInit {
  public form: UntypedFormGroup;
  public search: string;
  public results$: Observable<SearchRoutes>;
  constructor(private fb: UntypedFormBuilder, private searchService: SearchService) {}

  ngOnInit() {
    this.form = this.buildForm();
    this.results$ = this.observeResults(this.form);
  }

  private buildForm(): UntypedFormGroup {
    return this.fb.group({
      search: this.fb.control('', [])
    });
  }

  private observeResults(form: UntypedFormGroup): Observable<SearchRoutes> {
    return form.get('search').valueChanges.pipe(
      debounceTime(100),
      map(search => this.searchService.search(search))
    );
  }
  public onSubmit(form: UntypedFormGroup) {
    console.log('test in form:', form);
    // TODO: "go-to" the first link shown, add later
  }
}
