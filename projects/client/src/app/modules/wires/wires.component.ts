import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-wires',
  template: `
    <p>
      wires works!
    </p>
  `,
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class WiresComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
