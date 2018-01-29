import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Route } from '@angular/router';

import { CoreModule } from '../core/core.module';
import { DashboardComponent } from './dashboard.component';
import { CustomerListComponent } from './customer-list/customer-list.component';
import { SearchCustomerComponent } from './search-customer/search-customer.component';
import { CustomerListService } from './services/customer-list.service';
import { LazyResourcesModule } from '../lazy-resources/lazy-resources.module';

const routes: Route[] = [
  {path: '', component: DashboardComponent}
];

@NgModule({
  declarations: [
    DashboardComponent,
    CustomerListComponent,
    SearchCustomerComponent
  ],
  schemas: [NO_ERRORS_SCHEMA],
  imports: [
    CommonModule,
    CoreModule.forRoot(),
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    LazyResourcesModule,
    RouterModule.forChild(routes)
  ],
  providers: [CustomerListService],
  exports: [RouterModule]
})
export class DashboardModule { }
