import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-middle-layout',
  template: `
    <main>
      <div fxLayout="column" fxLayoutAlign="center center">
        <ng-content></ng-content>
      </div>
    </main>
  `,
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MiddleLayoutComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
