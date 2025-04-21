import { Component } from '@angular/core';
import { IonApp, IonRouterOutlet } from '@ionic/angular/standalone';
import { FcmService } from './services/fcm/fcm.service';
import { Platform } from '@ionic/angular';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  imports: [IonApp, IonRouterOutlet],
})

export class AppComponent {
  constructor(
    private platform: Platform,
    private fcm: FcmService
  ) {
    this.platform.ready().then(() => {
      this.fcm.initPush();
    }).catch(e => {
      console.log(e);
    })
  }
}
