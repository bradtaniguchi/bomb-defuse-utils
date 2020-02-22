import {
  ChangeDetectionStrategy,
  Component,
  OnInit,
  OnDestroy
} from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Observable, Subject } from 'rxjs';
import { map, shareReplay, startWith, takeUntil } from 'rxjs/operators';
import { logger } from '../../core/logger';
import {
  ComplexService,
  GlobalWireParams,
  WireParams
} from '../../core/services/complex/complex.service';
import { Instruction } from '../../core/services/complex/instruction-defs';

type GeneralParams = WireParams & GlobalWireParams;
@Component({
  selector: 'app-complex',
  template: `
    <form [formGroup]="form" novalidate>
      <div>
        <app-middle-layout>
        <div class="margin">
          <app-manual-link linkId="ComplicatedWires"></app-manual-link>
        </div>
          <!-- other settings -->
          <app-form-field>
            <label for="showInstructionalInputs"
              >Ask Instructional questions?</label
            >
            <select
              appFormInput
              formControlName="showInstructionalInputs"
              name="showInstructionalInputs"
            >
              <option [ngValue]="true">
                Yes
              </option>
              <option [ngValue]="false">
                No
              </option>
            </select>
            <div>
              NOTE: if No, we will show the output, and you (the manual-reader)
              might need to ask more questions.
            </div>
          </app-form-field>
          <ng-container *ngIf="showInstructionalInputs$ | async">
            <h3>
              Instructional Inputs
            </h3>
            <app-form-field>
              <label for="lastDigitIsEven"
                >Is the last digit of the serial number even?</label
              >
              <select
                appFormInput
                formControlName="lastDigitIsEven"
                name="lastDigitIsEven"
              >
                <option [ngValue]="true">
                  Yes
                </option>
                <option [ngValue]="false">
                  No
                </option>
              </select>
            </app-form-field>
            <app-form-field>
              <label for="hasParallelPort"
                >Does the bomb have a parallel port?</label
              >
              <select
                appFormInput
                formControlName="hasParallelPort"
                name="hasParallelPort"
              >
                <option [ngValue]="true">
                  Yes
                </option>
                <option [ngValue]="false">
                  No
                </option>
              </select>
            </app-form-field>
            <app-form-field>
              <label for="multiBatteries"
                >Does the bomb have two or more wires?</label
              >
              <select
                appFormInput
                formControlName="multiBatteries"
                name="multiBatteries"
              >
                <option [ngValue]="true">
                  Yes
                </option>
                <option [ngValue]="false">
                  No
                </option>
              </select>
            </app-form-field>
          </ng-container>
          <h3>
            Wire specific questions
          </h3>
          <app-form-field>
            <label for="wireHasRed">Wire has red coloring</label>
            <select appFormInput formControlName="wireHasRed" name="wireHasRed">
              <option [ngValue]="true">
                Yes
              </option>
              <option [ngValue]="false">
                No
              </option>
            </select>
          </app-form-field>

          <app-form-field>
            <label for="wireHasBlue">Wire has blue coloring</label>
            <select
              appFormInput
              formControlName="wireHasBlue"
              name="wireHasBlue"
            >
              <option [ngValue]="true">
                Yes
              </option>
              <option [ngValue]="false">
                No
              </option>
            </select>
          </app-form-field>

          <app-form-field>
            <label for="hasStar">Wire has a star</label>
            <select appFormInput formControlName="hasStar" name="hasStar">
              <option [ngValue]="true">
                Yes
              </option>
              <option [ngValue]="false">
                No
              </option>
            </select>
          </app-form-field>

          <app-form-field>
            <label for="LEDIsOn">LED Is On</label>
            <select appFormInput formControlName="LEDIsOn" name="LEDIsOn">
              <option [ngValue]="true">
                Yes
              </option>
              <option [ngValue]="false">
                No
              </option>
            </select>
          </app-form-field>
          <ng-container
            *ngIf="showInstructionalInputs$ | async; else showInstruction"
          >
            <!-- if we are showing the instructional inputs, we show the "cutTheWire" observable
            -->
            <app-answer-box *ngIf="cutTheWire$ | async as cutTheWire">
              {{ getCutTheWireDisplay(cutTheWire) }}
            </app-answer-box>
          </ng-container>
          <!-- TODO: add cut or not cut the wire -->
          <ng-template #showInstruction>
            <app-answer-box *ngIf="instruction$ | async as instruction">
              {{ instruction }}
            </app-answer-box>
          </ng-template>
          <div fxLayout="row" fxLayoutAlign="end" class="half-width">
            <button
              type="button"
              (click)="clearForm(form)"
              title="removes wire specific questions"
            >
              Reset
            </button>
          </div>
        </app-middle-layout>
      </div>
    </form>
  `,
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ComplexComponent implements OnInit, OnDestroy {
  public form: FormGroup;
  public showInstructionalInputs$: Observable<boolean>;
  public instruction$: Observable<Instruction>;
  public cutTheWire$: Observable<boolean>;

  private takeUntil = new Subject();
  constructor(
    private fb: FormBuilder,
    private complexService: ComplexService
  ) {}

  ngOnInit() {
    this.form = this.buildForm();
    this.showInstructionalInputs$ = this.observeShowInstructionalInputs(
      this.form
    );
    this.instruction$ = this.observeInstruction(this.form);
    this.cutTheWire$ = this.observeCutTheWire(this.form);
  }

  ngOnDestroy() {
    this.takeUntil.next();
    this.takeUntil.unsubscribe();
  }

  public getCutTheWireDisplay(cutTheWire: boolean): string {
    return cutTheWire ? Instruction.C : Instruction.D;
  }

  public clearForm(form: FormGroup) {
    logger.log('clearing form');
    form.patchValue({
      wireHasRed: null,
      wireHasBlue: null,
      hasStar: null,
      LEDIsOn: null
    });
  }

  private buildForm(): FormGroup {
    return this.fb.group({
      // use instructional questions
      showInstructionalInputs: this.fb.control(false, []),

      wireHasRed: this.fb.control(null, []),
      wireHasBlue: this.fb.control(null, []),
      hasStar: this.fb.control(null, []),
      LEDIsOn: this.fb.control(null, []),
      // instructional instructional question
      lastDigitIsEven: this.fb.control(null, []),
      hasParallelPort: this.fb.control(null, []),
      multiBatteries: this.fb.control(null, [])
    });
  }

  private observeShowInstructionalInputs(form: FormGroup): Observable<boolean> {
    return form.valueChanges.pipe(
      map(formValue => !!formValue.showInstructionalInputs),
      startWith(false)
    );
  }

  private observeInstruction(
    form: FormGroup
  ): Observable<Instruction | undefined> {
    return form.valueChanges.pipe(
      map((wireParams: WireParams) =>
        this.complexService.isWireParams(wireParams)
          ? this.complexService.getInstruction(wireParams)
          : undefined
      )
    );
  }

  private observeCutTheWire(form: FormGroup): Observable<boolean> {
    return form.valueChanges.pipe(
      map((params: GeneralParams) => {
        const isWireParams = this.complexService.isWireParams(params);
        const isGlobalWireParams = this.complexService.isGlobalWireParams(
          params
        );
        logger.log(
          'test with observe cut wire:',
          isWireParams,
          isGlobalWireParams
        );
        return isWireParams && isGlobalWireParams
          ? this.complexService.cutWire(params, params)
          : undefined;
      })
    );
  }
}
