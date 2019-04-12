import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { combineLatest, Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import { WireColor } from '../../core/models/wire';
import { WiresService } from '../../core/services/wires/wires.service';
@Component({
  selector: 'app-wires',
  template: `
    <form [formGroup]="form" novalidate>
      <app-middle-layout>
        <app-form-field>
          <label for="wires">1. How many wires? (3-6)</label>
          <input
            type="number"
            appFormInput
            formControlName="num"
            min="3"
            max="6"
          />
          <div style="color: red" *ngIf="form.get('num').hasError('min')">
            Value is too small
          </div>
          <div style="color: red" *ngIf="form.get('num').hasError('max')">
            Value is too large
          </div>
        </app-form-field>
        <div class="margin full-width">
          <ng-container *ngIf="(showSecondQuestions$ | async)">
            <app-form-field
              *ngFor="
                let control of form.get('wires').controls;
                let index = index
              "
            >
              <label for="wires">Wire: {{ index + 1 }}</label>
              <select appFormInput [formControl]="control">
                <option *ngFor="let wire of wireOptions" [value]="wire">{{
                  wire
                }}</option>
              </select>
            </app-form-field>
          </ng-container>
        </div>
        <app-form-field *ngIf="(showSecondQuestions$ | async)">
          <label for="wires">2. Is Serial Odd</label>
          <select type="select" appFormInput formControlName="isSerialOdd">
            <option [value]="true">True</option>
            <option [value]="true">False</option>
          </select>
          <div *ngIf="(dontUseSerial$ | async); else showNeedSerial">
            Disregard this input for this listing of wires!
          </div>
          <ng-template #showNeedSerial>
            This is required!
          </ng-template>
        </app-form-field>
        <ng-container *ngIf="(showSecondQuestions$ | async)">
          Cut Wire: {{ wireToCut$ | async }}
        </ng-container>
      </app-middle-layout>
    </form>
  `,
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class WiresComponent implements OnInit {
  public form: FormGroup;
  public readonly wireOptions: WireColor[] = [
    'black',
    'blue',
    'red',
    'white',
    'yellow'
  ];
  public wireToCut$: Observable<number>;
  public dontUseSerial$: Observable<boolean>;
  public showSecondQuestions$: Observable<boolean>;
  constructor(private fb: FormBuilder, private wiresService: WiresService) {}

  ngOnInit() {
    this.form = this.buildForm();
    this.form.get('num').valueChanges.subscribe(() => this.onWiresChange());
    this.wireToCut$ = this.observeWireToCut();
    this.showSecondQuestions$ = this.observeSecondQuestions();
    this.dontUseSerial$ = this.observeDontUseSerial();
  }

  private buildForm(): FormGroup {
    return this.fb.group({
      num: this.fb.control(null, [Validators.min(3), Validators.max(6)]),
      wires: this.fb.array([]),
      isSerialOdd: this.fb.control(false)
    });
  }

  private observeSecondQuestions(): Observable<boolean> {
    return this.form
      .get('num')
      .valueChanges.pipe(map(numOfWires => !!numOfWires));
  }

  private observeDontUseSerial(): Observable<boolean> {
    return this.form
      .get('wires')
      .valueChanges.pipe(
        map(wires => !this.wiresService.needIsSerialOdd(wires))
      );
  }

  private onWiresChange() {
    const num = this.form.get('num').value;
    if (num >= 3 && num <= 6) {
      const controls = new Array(num)
        .fill(null)
        .map(() => this.fb.control('white' as WireColor));
      const formArray = this.form.get('wires') as FormArray;
      while (formArray.length !== 0) {
        formArray.removeAt(0);
      }
      controls.forEach(control => formArray.push(control));
    }
  }

  private observeWireToCut(): Observable<number> {
    return combineLatest(
      this.form.get('wires').valueChanges,
      this.form.get('isSerialOdd').valueChanges.pipe(startWith(false))
    ).pipe(
      map(([wires, isSerialOdd]: [WireColor[], boolean]) =>
        this.wiresService.getWireToCut(wires, isSerialOdd)
      )
    );
  }
}
