import { Component, OnInit } from '@angular/core';
import {NavigationExtras, Router} from '@angular/router';
import {ServicePanneauxService} from '../services/service-panneaux.service';
import {Panneaux} from '../services/panneaux';
import {ActivatedRoute} from '@angular/router';


@Component({
  selector: 'app-panneau-par-categorie',
  templateUrl: './panneau-par-categorie.page.html',
  styleUrls: ['./panneau-par-categorie.page.scss'],
})
export class PanneauParCategoriePage implements OnInit {
  panneaux: Panneaux[] = null;
  id: any;
  test;

  constructor(private route: ActivatedRoute, private panneauService: ServicePanneauxService, private router: Router) {
    this.route.queryParams.subscribe(params => {
      if (params && params.id) {
        console.log(params.id);
        this.panneaux = this.panneauService.PanneauxByCatId(params.id);
        console.log(this.panneaux);
      }
    });
  }

  ngOnInit() {
  }


  onClick(panneauId) {
    let navigationExtras: NavigationExtras = {
      queryParams: {id: panneauId},
    };
    this.router.navigate(['detail-panneau'], navigationExtras);
  }

}
