import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./pages/home/home.module').then(m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'main',
    pathMatch: 'full'
  },
  {
    path: 'main',
    loadChildren: () => import('./pages/main/main.module').then(m => m.MainPageModule)
  },
  {
    path: 'never-no',
    loadChildren: () => import('./pages/never-no/never-no.module').then( m => m.NeverNoPageModule)
  },
  {
    path: 'truth-or-dare',
    loadChildren: () => import('./pages/truth-or-dare/truth-or-dare.module').then( m => m.TruthOrDarePageModule)
  },
  {
    path: 'card-drunk',
    loadChildren: () => import('./pages/card-drunk/card-drunk.module').then( m => m.CardDrunkPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
