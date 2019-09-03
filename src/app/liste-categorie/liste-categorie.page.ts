import { Component, OnInit } from '@angular/core';
import { Router, NavigationExtras } from '@angular/router';
import {ServiceCategorieService} from '../services/service-categorie.service';
import { Categorie } from '../services/categorie';

@Component({
  selector: 'app-liste-categorie',
  templateUrl: './liste-categorie.page.html',
  styleUrls: ['./liste-categorie.page.scss'],
})
export class ListeCategoriePage implements OnInit {
  categories: Categorie[] = null;

  constructor(private categorieService: ServiceCategorieService, private router: Router) {
    this.getCategories();
  }

  ngOnInit() {
  }

  getCategories() {
    this.categories = this.categorieService.getAllCategories();
  }

  onClick(categorieId) {
    let navigationExtras: NavigationExtras = {
      queryParams: {id: categorieId},
    };
    this.router.navigate(['detail-categorie'], navigationExtras);
  }
}
