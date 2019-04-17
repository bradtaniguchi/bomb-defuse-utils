import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-header',
  template: `
    <header fxLayout="row" fxLayoutAlign="end">
      <a routerLink="/" class="title" fxFlex="30">Bomb Defuse Utils</a>
      <nav role="navigation" fxLayout="row" fxLayoutAlign="center">
        <a class="app-button" routerLink="/search" routerLinkActive="active"
          >Search</a
        >
        <a
          class="app-button"
          href="http://www.bombmanual.com/manual/1/html"
          routerLinkActive="active"
          >Manual</a
        >
        <a class="app-button" routerLink="/utils" routerLinkActive="active"
          >Utils</a
        >
      </nav>
      <span fxFlex></span>
    </header>
  `,
  styles: [
    `
      .title {
        margin: 8px;
      }
    `
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeaderComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
