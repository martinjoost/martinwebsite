import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const appRoutes: Routes = [
    {
        path: 'home',
        loadChildren: './dashboard/dashboard.module#DashboardModule',
    },
    {
        path: 'customers',
        loadChildren: './customers/customers.module#CustomersModule',
    },
    {
        path: 'users',
        loadChildren: './users/users.module#UsersModule',
    },
    {
        path: 'about',
        loadChildren: './about/about.module#AboutModule',
    },
    {
        path: '**',
        redirectTo: 'home',
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
