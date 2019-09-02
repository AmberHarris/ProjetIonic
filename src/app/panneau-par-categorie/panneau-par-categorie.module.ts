import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { PanneauParCategoriePage } from './panneau-par-categorie.page';

const routes: Routes = [
  {
    path: '',
    component: PanneauParCategoriePage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [PanneauParCategoriePage]
})
export class PanneauParCategoriePageModule {}
