import { Routes } from "@angular/router";
import { TabsComponent } from "./components/tabs/tabs.component";
import { WaterMainComponent } from "./pages/water-reminder/water-main/water-main.component";
import { LayoutComponent } from "./pages/water-reminder/layout/layout.component";
import { WaterHistoryComponent } from "./pages/water-reminder/water-history/water-history.component";
''
export const routes: Routes = [
    {
        path: 'tabs',
        component: TabsComponent,
        children: [
            {
                path: 'explore',
                loadComponent: () => 
                    import('./pages/explore/explore.component').then(m => m.ExploreComponent)
            },
            {
                path: 'missions',
                loadComponent: () =>
                    import('./pages/missions/missions.component').then(m => m.MissionsComponent)
            },
            {
                path: 'lumo',
                loadComponent: () =>
                    import('./pages/lumo/lumo.component').then(m => m.LumoComponent)
            },
            {
                path: 'search',
                loadComponent: () => 
                    import('./pages/search/search.component').then(m => m.SearchComponent)
            },
            {
                path: 'profile',
                loadComponent: () =>
                    import('./pages/profile/profile.component').then(m => m.ProfileComponent)
            },
            
        ]
    },
    {
        path: 'tabs',
        redirectTo: 'tabs/explore',
        pathMatch: 'full'
    },
    {
        path: 'water-reminder',
        component: WaterMainComponent,
    },
    {
        path: 'water-reminder/history',
        loadComponent: () => 
            import('./pages/water-reminder/water-history/water-history.component').then(m => m.WaterHistoryComponent)
    }
]