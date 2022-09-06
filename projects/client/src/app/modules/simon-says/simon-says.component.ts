import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { UntypedFormGroup, UntypedFormBuilder, Validators } from '@angular/forms';
import { Observable, ReplaySubject } from 'rxjs';
import { SimonSaysService } from '../../core/services/simon-says/simon-says.service';
import { startWith, map, mergeMap, switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-simon-says',
  template: `
    <form [formGroup]="form$ | async" novalidate>
      <app-middle-layout>
        <div class="margin">
          <app-manual-link linkId="SimonSays"></app-manual-link>
        </div>
        <app-form-field>
          <label for="serialHasVowel">
            Serial Has Vowel
          </label>
          <input type="checkbox" formControlName="serialHasVowel" />
        </app-form-field>
        <app-form-field>
          <label for="strikes">Number of Strikes</label>
          <input
            placeholder="The number of strikes you have"
            type="number"
            appFormInput
            formControlName="strikes"
            min="0"
            max="2"
          />
        </app-form-field>
        <div class="full-width">
          <app-form-field>
            <label for="colors">Pattern defuser sees (rgby)</label>
            <input type="text" appFormInput formControlName="colors" />
          </app-form-field>
        </div>
        <button type="button" (click)="clear()" title="Resets the form">
          Reset
        </button>
        <div>
          Pattern to enter:
          {{ pattern$ | async }}
        </div>
      </app-middle-layout>
    </form>
  `,
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SimonSaysComponent implements OnInit {
  public form$ = new ReplaySubject<UntypedFormGroup>(1);
  public pattern$: Observable<string>;
  constructor(
    private fb: UntypedFormBuilder,
    private simonSaysService: SimonSaysService
  ) {}

  ngOnInit(): void {
    this.form$.next(this.getForm());
    this.pattern$ = this.getPattern$(this.form$);
  }

  private getForm() {
    return this.fb.group({
      serialHasVowel: this.fb.control(false, [Validators.required]),
      strikes: this.fb.control(0, [
        Validators.required,
        Validators.min(0),
        Validators.max(2)
      ]),
      colors: this.fb.control('')
    });
  }

  private getPattern$(form$: Observable<UntypedFormGroup>) {
    return form$.pipe(
      switchMap(form =>
        form.valueChanges.pipe(
          startWith(form.value),
          map(
            ({
              serialHasVowel,
              strikes,
              colors
            }: {
              serialHasVowel: boolean;
              strikes: number | null;
              colors: string;
            }) =>
              this.simonSaysService.getPattern({
                serialHasVowel,
                strikes,
                colors: this.simonSaysService.getColors(colors)
              })
          )
        )
      )
    );
  }

  public clear() {
    this.form$.next(this.getForm());
  }
}
