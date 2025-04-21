import { Routes } from "@angular/router";
import { TabsComponent } from "./tabs.component";

export const routes: Routes = [
    {
        path: 'tabs',
        component: TabsComponent,
        children: [
            {
                path: 'explore',
                loadComponent: () => 
                    import('../../pages/explore/explore.component').then(m => m.ExploreComponent)
            },
            {
                path: 'missions',
                loadComponent: () =>
                    import('../../pages/missions/missions.component').then(m => m.MissionsComponent)
            },
            {
                path: 'lumo',
                loadComponent: () =>
                    import('../../pages/lumo/lumo.component').then(m => m.LumoComponent)
            },
            {
                path: 'search',
                loadComponent: () => 
                    import('../../pages/search/search.component').then(m => m.SearchComponent)
            },
            {
                path: 'profile',
                loadComponent: () =>
                    import('../../pages/profile/profile.component').then(m => m.ProfileComponent)
            },
            
        ]
    },
    {
        path: '',
        redirectTo: '/app/explore',
        pathMatch: 'full'
    }
]