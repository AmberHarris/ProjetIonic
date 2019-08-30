import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)},
  { path: 'liste-categorie', loadChildren: './liste-categorie/liste-categorie.module#ListeCategoriePageModule' },
  { path: 'liste-panneaux', loadChildren: './liste-panneaux/liste-panneaux.module#ListePanneauxPageModule' },
  { path: 'detail-categorie', loadChildren: './detail-categorie/detail-categorie.module#DetailCategoriePageModule' },
  { path: 'detail-panneau', loadChildren: './detail-panneau/detail-panneau.module#DetailPanneauPageModule' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
