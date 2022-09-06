import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { UntypedFormArray, UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { Observable, ReplaySubject, combineLatest } from 'rxjs';
import {
  filter,
  map,
  mergeMap,
  startWith,
  switchMap,
  take,
  tap,
} from 'rxjs/operators';
import { logger } from '../../core/logger';
import {
  MemoryAction,
  MemoryPrompt,
  MemoryService,
} from '../../core/services/memory/memory.service';

@Component({
  selector: 'app-memory',
  template: `
    <form [formGroup]="form$ | async" novalidate>
      <div>
        <app-middle-layout>
          <div class="margin">
            <app-manual-link linkId="Memory"></app-manual-link>
          </div>
          <ng-container
            *ngFor="let prompt of prompts$ | async; let index = index"
          >
            <h3>Stage {{ index + 1 }}</h3>
            <div *ngFor="let subPrompt of prompt.prompts">
              <span>
                {{ subPrompt.msg }}
              </span>
            </div>
          </ng-container>
          <ng-container
            *ngFor="let group of actions$ | async; let index = index"
            [formGroup]="group"
          >
            <div class="margin">
              <h3>Stage: {{ index + 1 }}</h3>
              <app-form-field>
                <label> Location Selected </label>
                <input
                  type="number"
                  placeholder="The location of the button selected"
                  appFormInput
                  formControlName="position"
                  min="0"
                  max="4"
                />
              </app-form-field>
              <app-form-field>
                <label> Number selected </label>
                <input
                  type="number"
                  appFormInput
                  placeholder="The number on the button selected"
                  formControlName="label"
                  min="0"
                  max="9"
                />
              </app-form-field>
            </div>
          </ng-container>
          <div fxLayout="row" fxLayoutAlign="end" class="half-width">
            <button
              *ngIf="showNextStage$ | async"
              title="Moves onto the next stage"
              (click)="nextStage()"
            >
              Next Stage
            </button>
            <button
              *ngIf="showRemove$ | async"
              title="Removes the last entry"
              (click)="remove()"
            >
              Remove
            </button>
            <button
              type="button"
              (click)="clear()"
              title="Removes previous answers"
            >
              Reset
            </button>
          </div>
        </app-middle-layout>
      </div>
    </form>
  `,
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MemoryComponent implements OnInit {
  public form$ = new ReplaySubject<UntypedFormGroup>(1);
  public actions$: Observable<UntypedFormGroup[]>;
  public prompts$: Observable<MemoryPrompt[]>;
  public showNextStage$: Observable<boolean>;
  public showRemove$: Observable<boolean>;
  constructor(private fb: UntypedFormBuilder, private memoryService: MemoryService) {}

  ngOnInit(): void {
    this.form$.next(this.createFormGroup());
    this.actions$ = this.getActions$(this.form$);
    this.prompts$ = this.getPrompts$(this.actions$);
    this.showNextStage$ = this.getShowNextStage$(this.actions$);
    this.showRemove$ = this.getShowRemove$(this.actions$);
  }

  private createFormGroup() {
    return this.fb.group({
      actions: this.fb.array([this.buildMemoryAction()]),
    });
  }
  private getActions$(form$: Observable<UntypedFormGroup>) {
    return form$.pipe(
      map((form) => form.get('actions') as UntypedFormArray),
      tap((val) => logger.log('debug 1', val)),
      mergeMap((formArray) =>
        formArray.valueChanges.pipe(
          startWith(null),
          map(() => formArray.controls)
        )
      )
    ) as Observable<UntypedFormGroup[]>;
  }
  private getPrompts$(actions$: Observable<UntypedFormGroup[]>) {
    return actions$.pipe(
      tap((actions) => logger.log('test with prompts', actions)),
      switchMap((controls) =>
        combineLatest(controls.map((control) => this.getControlValue$(control)))
      ),
      tap((controls) => logger.log('getPrompts, controls', controls)),
      map((previousActions) => this.memoryService.getPrompts(previousActions)),
      tap((prompts) => logger.log('prompts', prompts))
    );
  }
  private getControlValue$(control: UntypedFormGroup): Observable<MemoryAction> {
    return control.valueChanges.pipe(startWith(control.value));
  }
  private getShowNextStage$(actions$: Observable<UntypedFormGroup[]>) {
    return actions$.pipe(map((action) => action.length < 4));
  }
  private getShowRemove$(actions$: Observable<UntypedFormGroup[]>) {
    return actions$.pipe(map((actions) => actions.length > 0));
  }

  public getActions(form: UntypedFormGroup) {
    return (form.get('actions') as UntypedFormArray).controls as UntypedFormGroup[];
  }

  public clear() {
    this.form$.next(this.createFormGroup());
  }

  /**
   * Adds a new formGroup to the actions array
   */
  public nextStage() {
    this.form$
      .pipe(
        map((form) => form.get('actions')),
        take(1),
        filter((actionsFormArray: UntypedFormArray) => actionsFormArray.length < 4)
      )
      .subscribe((actionsFormArray: UntypedFormArray) =>
        actionsFormArray.push(this.buildMemoryAction())
      );
  }

  public remove() {
    this.form$
      .pipe(
        map((form) => form.get('actions')),
        take(1),
        filter((actionsFormArray: UntypedFormArray) => !!actionsFormArray.length)
      )
      .subscribe((actionsFormArray: UntypedFormArray) =>
        actionsFormArray.removeAt(actionsFormArray.length - 1)
      );
  }

  private buildMemoryAction() {
    return this.fb.group({
      position: this.fb.control(0, [
        Validators.required,
        Validators.min(0),
        Validators.max(4),
      ]),
      label: this.fb.control(0, [
        Validators.required,
        Validators.min(0),
        Validators.max(9),
      ]),
    });
  }
}
