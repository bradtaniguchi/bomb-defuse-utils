import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-header',
  template: `
    <!-- nav template -->
    <ng-template #nav>
      <a
        class="app-button"
        routerLink="/search"
        routerLinkActive="active"
        (click)="showNav = false"
        >Search</a
      >
      <a class="app-button" href="https://www.bombmanual.com/web/index.html"
        >Manual</a
      >
      <a
        class="app-button"
        routerLink="/utils"
        routerLinkActive="active"
        (click)="showNav = false"
        >Utils</a
      >
      <a
        class="app-button"
        href="http://github.com/bradtaniguchi/bomb-defuse-utils"
        >Github</a
      >
    </ng-template>

    <header fxLayout="row" style="margin-bottom: 64px">
      <a routerLink="/" class="title" fxFlex.gt-sm="30" fxFlex="80"
        >Bomb Defuse Utils</a
      >
      <span [fxShow.sm]="true" [fxShow.xs]="true" [fxShow]="false">
        <button (click)="showNav = !showNav">
          Nav Menu
        </button>
        <nav *ngIf="showNav" fxLayout="column" class="overlay">
          <ng-container *ngTemplateOutlet="nav"></ng-container>
        </nav>
      </span>
      <span fxShow.gt-sm="true" fxShow="false">
        <nav role="navigation" fxLayout="row" fxLayoutAlign="center">
          <ng-container *ngTemplateOutlet="nav"></ng-container>
        </nav>
      </span>
      <span fxFlex></span>
    </header>
  `,
  styles: [
    `
      .title {
        margin: 8px;
      }
    `,
    `
      nav.overlay {
        background-color: #fff;
        position: absolute;
        right: 4px;
      }
    `,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderComponent implements OnInit {
  public showNav: boolean;
  constructor() {}

  ngOnInit() {}
}
