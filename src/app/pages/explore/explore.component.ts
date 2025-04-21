import { Component, inject } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import {IonContent, IonItem, IonCard, IonList, IonChip} from '@ionic/angular/standalone';
import { Router } from '@angular/router';
@Component({
  selector: 'app-explore',
  imports: [IonContent, IonItem, IonCard, IonList, IonChip],
  templateUrl: './explore.component.html',
  styleUrl: './explore.component.scss',
  
})
export class ExploreComponent {
  authService = inject(AuthService);
  router = inject(Router);

  navigateTo(url: string) {
    this.router.navigate([url])
  }

  logout() {
    this.authService.logout();
  }
}
