import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import {
  AbstractControl,
  FormArray,
  FormBuilder,
  FormGroup,
  Validators
} from '@angular/forms';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { logger } from '../../core/logger';
import {
  Combination,
  PasswordsService
} from '../../core/services/passwords/passwords.service';

@Component({
  selector: 'app-passwords',
  template: `
    <form [formGroup]="form" novalidate>
      <app-middle-layout>
        <app-form-field
          *ngFor="let control of getPasswordControls(); let index = index"
        >
          <label [for]="'position_' + index + 1"
            >Position {{ index + 1 }}</label
          >
          <input
            placeholder="Enter the 5 letters for this position"
            type="text"
            appFormInput
            [formControl]="control"
            minlength="5"
            maxlength="5"
          />
          <div *ngIf="control.hasError('maxlength')">
            Input is to large, limit is 5
          </div>
        </app-form-field>
        <ng-container *ngIf="(words$ | async) as words">
          <div *ngIf="words.length === 0">
            <h3>No Words matching</h3>
          </div>
          <div *ngIf="words.length === 1">
            <h3
              >The word is:
              <span style="text-decoration: underline">{{ words[0] }}</span></h3
            >
          </div>
          <div *ngIf="words.length > 1">
            <h5>Potential Words</h5>
            <div fxLayout="column">
              <span *ngFor="let word of words">
                {{ word }}
              </span>
            </div>
          </div>
        </ng-container>
      </app-middle-layout>
    </form>
  `,
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PasswordsComponent implements OnInit {
  public form: FormGroup;
  public words$: Observable<string[]>;
  constructor(
    private fb: FormBuilder,
    private passwordsService: PasswordsService
  ) {}

  ngOnInit() {
    this.form = this.buildForm();
    this.words$ = this.observeWords(this.form);
  }

  public getPasswordControls(): AbstractControl[] {
    return (this.form.get('positions') as FormArray).controls;
  }

  private buildForm(): FormGroup {
    const positions = new Array(5)
      .fill(null)
      .map(() =>
        this.fb.control('', [Validators.maxLength(5), Validators.minLength(5)])
      );
    return this.fb.group({
      positions: this.fb.array(positions)
    });
  }

  private observeWords(form: FormGroup): Observable<string[]> {
    return form.get('positions').valueChanges.pipe(
      map((combinationStrings: string[]) =>
        combinationStrings.map(combinationString => combinationString.split(''))
      ),
      map((combinations: Combination) => {
        logger.log(
          'test: ',
          this.passwordsService.isEmpty(combinations),
          combinations
        );
        return this.passwordsService.getPossiblePasswords(combinations);
      })
    );
  }
}
