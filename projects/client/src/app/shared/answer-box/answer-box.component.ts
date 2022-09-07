import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-answer-box',
  template: ` <ng-content></ng-content> `,
  styles: [
    `
      :host {
        margin: 16px;
        font-weight: 800;
        border: 2px black solid;
        padding: 8px 4px;
        border-radius: 4px;
      }
    `,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AnswerBoxComponent {}
