import { Component, ChangeDetectionStrategy } from '@angular/core';
import { routes } from '../../app-routing.module';

interface UtilRoute {
  title: string;
  route: string;
}
@Component({
  selector: 'app-utils',
  template: `
    <app-middle-layout>
      <h3>All Utils:</h3>
      <ul>
        <li *ngFor="let route of routes">
          <a [routerLink]="['/', route.path]">
            {{ route.title }}
          </a>
        </li>
      </ul>
    </app-middle-layout>
  `,
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UtilsComponent {
  public readonly routes = routes.filter((route) => !route.exclude);
}
