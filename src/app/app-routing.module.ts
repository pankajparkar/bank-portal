import { BrowserModule } from '@angular/platform-browser';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import {NoopAnimationsModule} from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Route } from '@angular/router';
import { CoreModule } from './core/core.module';

const routes: Route[] = [
    {path: 'dashboard', loadChildren: './dashboard/dashboard.module#DashboardModule'},
    {path: '**', redirectTo: 'dashboard'},
]

@NgModule({
    imports: [
        CoreModule.forRoot(),
        RouterModule.forRoot(routes)
    ],
    exports: [RouterModule,CoreModule]
})
export class AppRoutingModule { }