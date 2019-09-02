import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, NavigationExtras, Router} from '@angular/router';
import {ServiceCategorieService} from '../services/service-categorie.service';
import {ServicePanneauxService} from '../services/service-panneaux.service';

@Component({
  selector: 'app-detail-categorie',
  templateUrl: './detail-categorie.page.html',
  styleUrls: ['./detail-categorie.page.scss'],
})
export class DetailCategoriePage implements OnInit {
    categorie;
    panneaux;
  // tslint:disable-next-line:max-line-length
    constructor(private route: ActivatedRoute, private categorieService: ServiceCategorieService, private panneauService: ServicePanneauxService, private router: Router) {
      this.route.queryParams.subscribe(params => {
        if (params && params.id) {
          this.categorie = this.categorieService.get(params.id);
          this.panneaux = this.panneauService.get(params.id);
        }
      });
  }


  ngOnInit() {
  }

  onClick(panneauCategorieId) {
    let navigationExtras: NavigationExtras = {
      queryParams: {id: panneauCategorieId},
    };
    this.router.navigate(['panneau-par-categorie'], navigationExtras);
  }

}
