import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const appRoutes: Routes = [
    {
        path: 'aboutme',
        loadChildren: './dashboard/dashboard.module#DashboardModule',
    },
    {
        path: 'skills',
        loadChildren: './customers/customers.module#CustomersModule',
    },
    {
        path: 'experiences',
        loadChildren: './users/users.module#UsersModule',
    },
    {
        path: 'contact',
        loadChildren: './about/about.module#AboutModule',
    },
    {
        path: '**',
        redirectTo: 'aboutme',
        pathMatch: 'full'
    }
];

@NgModule({
    imports: [
        RouterModule.forRoot(appRoutes)
    ],
    exports: [RouterModule],
    providers: []
})
export class AppRoutingModule { }
