import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-header',
  template: `
    <header fxLayout="row" fxFlex>
      <a routerLink="/" class="header">Bomb Defuse Utils</a>
      <nav role="navigation">
        <a routerLink="search">Search</a>
        <a>Manual</a>
        <button routerLink="utils">Utils</button>
      </nav>
    </header>
  `,
  styles: [
    `
      header {
        height: 32px;
        min-height: 32px;
      }
    `
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeaderComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
