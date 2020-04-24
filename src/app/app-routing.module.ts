import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const appRoutes: Routes = [
    {
        path: 'auth',
        loadChildren: './auth/auth.module#AuthModule'
    },
    {
        path: 'dashboard',
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
        path: 'account',
        loadChildren: './account/account.module#AccountModule',
    },
    {
        path: 'icons',
        loadChildren: './icons/icons.module#IconsModule',
    },
    {
        path: 'typography',
        loadChildren: './typography/typography.module#TypographyModule',
    },
    {
        path: 'about',
        loadChildren: './about/about.module#AboutModule',
    },
    {
        path: '**',
        redirectTo: 'dashboard',
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
