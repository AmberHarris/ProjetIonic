import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  menuItems = [ /*tableau d'items du menu avec titre, url et icone qui sera affichée devant*/
    {title: 'Home', url: '/home', icon: 'home'},
    {title: 'Categories', url: '/liste-categorie', icon: 'filing'},
    {title: 'Panneaux', url: '/liste-panneaux', icon: 'apps'},
    {title: 'Quiz', url: '/quiz-home', icon: 'barcode'},
  ]
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }
}
