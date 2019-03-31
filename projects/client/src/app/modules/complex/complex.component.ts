import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-complex',
  template: `
    <p>
      complex works!
    </p>
  `,
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ComplexComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
