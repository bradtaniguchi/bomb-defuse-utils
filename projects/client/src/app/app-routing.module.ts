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
    loadChildren: () =>
      import('./modules/complex/complex.module').then(m => m.ComplexModule),
    title: 'On the Subject of Complicated Wires',
    tags: ['wires', 'star', 'LED', 'red', 'blue', 'vertical', 'cut', 'multiple']
  },
  {
    path: 'search',
    loadChildren: () =>
      import('./modules/search/search.module').then(m => m.SearchModule),
    exclude: true
  },
  {
    path: 'wires',
    loadChildren: () =>
      import('./modules/wires/wires.module').then(m => m.WiresModule),
    title: 'On the Subject of Wires',
    tags: ['wires', 'top', 'bottom', 'cut', 'one', '3', '4', '5', '6']
  },
  {
    path: 'passwords',
    loadChildren: () =>
      import('./modules/passwords/passwords.module').then(
        m => m.PasswordsModule
      ),
    title: 'On the Subject of Passwords',
    tags: ['letters', 'words', 'dials', '5', 'five', 'grid', 'guess']
  },
  {
    path: 'utils',
    loadChildren: () =>
      import('./modules/utils/utils.module').then(m => m.UtilsModule),
    exclude: true
  },
  {
    path: 'memory',
    loadChildren: () =>
      import('./modules/memory/memory.module').then(m => m.MemoryModule),
    title: 'On the Subject Memory',
    tags: ['memory', 'numbers', 'display', '4', '5', 'four', 'five']
  },
  {
    path: 'simon',
    loadChildren: () =>
      import('./modules/simon-says/simon-says.module').then(
        m => m.SimonSaysModule
      ),
    title: 'On the Subject of Simon Says',
    tags: ['simon', '4', 'four', 'red', 'green', 'yellow', 'blue']
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'search',
    exclude: true
  },
  {
    path: '**',
    pathMatch: 'full',
    redirectTo: 'search',
    exclude: true
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      useHash: true
    })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
