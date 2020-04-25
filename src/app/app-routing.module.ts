import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const appRoutes: Routes = [
    {
        path: 'aboutme',
        loadChildren: './about/about.module#AboutModule',
    },
    {
        path: 'skills',
        loadChildren: './customers/customers.module#CustomersModule',
    },
    {
        path: 'experiences',
        loadChildren: './experiences/experiences.module#ExperiencesModule',
    },
    {
        path: 'contact',
        loadChildren: './contact/contact.module#ContactModule',
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
