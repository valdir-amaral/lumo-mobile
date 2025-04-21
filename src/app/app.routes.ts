import { Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { authGuard } from './guards/auth.guard';
import { ExploreComponent } from './pages/explore/explore.component';
import { TabsComponent } from './components/tabs/tabs.component';
import { WaterMainComponent } from './pages/water-reminder/water-main/water-main.component';

export const routes: Routes = [
    {path: 'login', component: LoginComponent},
    {
        path: 'app',
        canActivate: [authGuard],
        loadChildren: () => import('./internal.routes').then(m => m.routes)
    },
    {
        path: '',
        redirectTo: 'app/tabs/explore',
        pathMatch: 'full'
    },
    
    {path: '**', redirectTo: '/login'}
];
