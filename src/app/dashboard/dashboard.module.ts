import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { RouterModule, Route } from '@angular/router';

import { CoreModule } from '../core/core.module';
import { DashboardComponent } from './dashboard.component';
import { CustomerListComponent } from './customer-list/customer-list.component';
import { SearchCustomerComponent } from './search-customer/search-customer.component';
import { CustomerListService } from './services/customer-list.service';
import { LazyResourcesModule } from '../lazy-resources/lazy-resources.module';
import { SearchNameService } from './services/search-name.service';
import { CustomerItemComponent } from './customer-item/customer-item.component';

const routes: Route[] = [
  {path: '', component: DashboardComponent}
];

@NgModule({
  declarations: [
    DashboardComponent,
    CustomerListComponent,
    SearchCustomerComponent,
    CustomerItemComponent
  ],
  schemas: [NO_ERRORS_SCHEMA],
  imports: [
    CoreModule.forRoot(),
    LazyResourcesModule,
    RouterModule.forChild(routes)
  ],
  providers: [
    CustomerListService,
    SearchNameService
  ],
  exports: [RouterModule]
})
export class DashboardModule { }
