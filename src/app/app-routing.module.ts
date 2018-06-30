import { NgModule } from '@angular/core';
import { RouterModule, Route, NoPreloading, PreloadAllModules, PreloadingStrategy } from '@angular/router';
import { CoreModule } from './core/core.module';

const routes: Route[] = [
    {path: 'dashboard', loadChildren: './dashboard/dashboard.module#DashboardModule'},
    {path: 'random-photo', loadChildren: './random-photo/random-photo.module#RandomPhotoModule'},
    {path: 'calculator', loadChildren: './calculator/calculator.module#CalculatorModule'},
    {path: '**', redirectTo: 'dashboard'}
]

@NgModule({
    imports: [
        CoreModule.forRoot(),
        RouterModule.forRoot(routes, {preloadingStrategy: NoPreloading})
    ],
    exports: [RouterModule,CoreModule]
})
export class AppRoutingModule { }