import { bootstrapApplication } from '@angular/platform-browser';
import { RouteReuseStrategy, provideRouter, withPreloading, PreloadAllModules } from '@angular/router';
import { IonicRouteStrategy, provideIonicAngular } from '@ionic/angular/standalone';
import { provideFirebaseApp } from '@angular/fire/app';
import { routes } from './app/app.routes';
import { AppComponent } from './app/app.component';
import { initializeApp } from 'firebase/app';
import { Auth, getAuth, provideAuth } from '@angular/fire/auth';

const firebaseConfig = {
  apiKey: "",
   authDomain: "",
   databaseURL: "",
   projectId: "",
   messagingSenderId: "",
   appId: "",
   storageBucket: ""
}

bootstrapApplication(AppComponent, {
  providers: [
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    provideIonicAngular(),
    provideRouter(routes, withPreloading(PreloadAllModules)),
    provideFirebaseApp(() => initializeApp(firebaseConfig)),
    provideAuth(() => getAuth())
  ],
});
