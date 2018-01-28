import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DashboardComponent } from './dashboard/dashboard.component';

const routes = [
  {path: 'dashboard', component: DashboardComponent},
  {path: '**', redirectTo: 'dashboard'}
]

@NgModule({
  declarations: [DashboardComponent],
  imports: [
    RouterModule.forRoot(routes),
  ],
  exports: [RouterModule, DashboardComponent]
})
export class AppRoutingModule { }