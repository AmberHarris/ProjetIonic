import { Component, OnInit } from '@angular/core';
import {NavigationExtras, Router} from '@angular/router';
import {ServicePanneauxService} from '../services/service-panneaux.service';
import {Panneaux} from '../services/panneaux';

@Component({
  selector: 'app-panneaux',
  templateUrl: './liste-panneaux.page.html',
  styleUrls: ['./liste-panneaux.page.scss'],
})
export class ListePanneauxPage implements OnInit {
  panneaux: Panneaux[] = null;

  constructor(private panneauService: ServicePanneauxService, private router: Router) {
    this.getPanneaux();
  }

  ngOnInit() {
  }
  getPanneaux() {
    this.panneaux = this.panneauService.getAllPanneaux();
  }

  onClick(panneauId) {
    let navigationExtras: NavigationExtras = {
      queryParams: {id: panneauId},
    };
    this.router.navigate(['detail-panneau'], navigationExtras);
  }
}
