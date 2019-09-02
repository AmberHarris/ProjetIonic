import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {ServicePanneauxService} from '../services/service-panneaux.service';

@Component({
  selector: 'app-detail-panneau',
  templateUrl: './detail-panneau.page.html',
  styleUrls: ['./detail-panneau.page.scss'],
})
export class DetailPanneauPage implements OnInit {
  panneau;
  constructor(private route: ActivatedRoute, private panneauService: ServicePanneauxService) {
    this.route.queryParams.subscribe(params => {
      if (params && params.id) {
        this.panneau = this.panneauService.get(params.id);
      }
    });
  }

  ngOnInit() {
  }

}
