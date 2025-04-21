import { Component, OnInit } from '@angular/core';
import {IonContent} from '@ionic/angular/standalone';
import { inject } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
  imports: [IonContent]
})
export class ProfileComponent  implements OnInit {
  authService = inject(AuthService);

  logout() {
    this.authService.logout();
  }
  constructor() { }

  ngOnInit() {}

}
