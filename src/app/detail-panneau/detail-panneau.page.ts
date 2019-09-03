import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, NavigationExtras, Router} from '@angular/router';
import {ServicePanneauxService} from '../services/service-panneaux.service';

@Component({
  selector: 'app-detail-panneau',
  templateUrl: './detail-panneau.page.html',
  styleUrls: ['./detail-panneau.page.scss'],
})
export class DetailPanneauPage implements OnInit {
  panneau;
  test;

  constructor(private route: ActivatedRoute, private panneauService: ServicePanneauxService, private router: Router) {
      this.route.queryParams.subscribe(params => {
      if (params && params.id) {
        this.panneau = this.panneauService.get(params.id);
      }
    });

  }

  ngOnInit() {
  }
  getPanneaux(id) {
    this.panneau = this.panneauService.PanneauxByCatId(id);
  }

  onClick(panneauId) {
    let navigationExtras: NavigationExtras = {
      queryParams: {id: panneauId},
    };
    this.router.navigate(['panneau-par-categorie'], navigationExtras);
  }

}
