import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-form-field',
  template: `
    <div fxLayout="column" fxLayoutAlign="center center" class="half-width">
      <ng-content></ng-content>
    </div>
  `,
  styles: [
    `
      :host {
        width: 100%;
        display: flex;
        justify-content: center;
      }
    `,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FormFieldComponent {}
