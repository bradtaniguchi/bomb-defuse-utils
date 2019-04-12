import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'complex',
    loadChildren: './modules/complex/complex.module#ComplexModule'
  },
  {
    path: 'search',
    loadChildren: './modules/search/search.module#SearchModule'
  },
  {
    path: 'wires',
    loadChildren: './modules/wires/wires.module#WiresModule'
  },
  {
    path: 'passwords',
    loadChildren: './modules/passwords/passwords.module#PasswordsModule'
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
