import { BrowserModule } from '@angular/platform-browser';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import {NoopAnimationsModule} from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';

import { DashboardComponent } from './dashboard/dashboard.component';
import { CustomerListComponent } from './customer-list/customer-list.component';
import { CustomerDialogComponent } from './customer-dialog/customer-dialog.component';
import { ConfirmDeleteDialogComponent } from './confirm-delete-dialog/confirm-delete-dialog.component';
import { SearchCustomerComponent } from './search-customer/search-customer.component';
import { CustomerCardComponent } from './customer-card/customer-card.component';

import { AppComponent } from './app.component';
import { CustomMaterialModule } from './custom-material/custom-material.module';
import { NavbarComponent } from './navbar/navbar.component';

const routes = [
  {path: 'dashboard', component: DashboardComponent},
  {path: '**', redirectTo: 'dashboard'}
]

@NgModule({
  declarations: [
    DashboardComponent,
    CustomerListComponent,
    CustomerDialogComponent,
    CustomerDialogComponent,
    ConfirmDeleteDialogComponent,
    SearchCustomerComponent,
    CustomerCardComponent
  ],
  schemas: [NO_ERRORS_SCHEMA],
  imports: [
    BrowserModule,
    CustomMaterialModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes),
  ],
  exports: [RouterModule, DashboardComponent]
})
export class AppRoutingModule { }