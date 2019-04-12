import { NgModule } from '@angular/core';
import { Routes, RouterModule, Route } from '@angular/router';

export interface SearchRoute extends Route {
  title?: string;
  tags?: string[];
  exclude?: boolean;
}
export type SearchRoutes = SearchRoute[];
/**
 * Root app routes
 */
export const routes: SearchRoutes = [
  {
    path: 'complex',
    loadChildren: './modules/complex/complex.module#ComplexModule',
    title: 'On the Subject of Complicated Wires',
    tags: ['wires', 'star', 'LED', 'red', 'blue', 'vertical', 'cut', 'multiple']
  },
  {
    path: 'search',
    loadChildren: './modules/search/search.module#SearchModule',
    exclude: true
  },
  {
    path: 'wires',
    loadChildren: './modules/wires/wires.module#WiresModule',
    title: 'On the Subject of Wires',
    tags: ['wires', 'top', 'bottom', 'cut', 'one', '3', '4', '5', '6']
  },
  {
    path: 'passwords',
    loadChildren: './modules/passwords/passwords.module#PasswordsModule',
    title: 'On the Subject of Passwords',
    tags: ['letters', 'words', 'dials', '5', 'five', 'grid', 'guess']
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'search'
  },
  {
    path: '**',
    pathMatch: 'full',
    redirectTo: 'search'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
