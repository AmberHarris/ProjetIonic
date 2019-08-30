import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import { Categorie } from '../services/categorie';
import {ServiceCategorieService} from '../services/service-categorie.service';

@Component({
  selector: 'app-detail-categorie',
  templateUrl: './detail-categorie.page.html',
  styleUrls: ['./detail-categorie.page.scss'],
})
export class DetailCategoriePage implements OnInit {
    categorie;
    constructor(private route: ActivatedRoute, private categorieService: ServiceCategorieService) {
      this.route.queryParams.subscribe(params => {
        if (params && params.id) {
          this.categorie = this.categorieService.get(params.id);
        }
      });
  }

  ngOnInit() {
  }

}
