import { ButtonsComponent } from './demo/buttons/buttons.component';
import { Routes } from '@angular/router';

export const MATERIAL_DOCS_ROUTES: Routes = [
    {
        path: '',
        redirectTo: 'demo'
    },
    {
        path: 'demo', pathMatch: 'full',
        loadChildren: () => import('./demo/demo-routing.module').then(m => m.DemoRoutingModule)
    },
    {
        path: '**',
        redirectTo: 'demo'
    },
];