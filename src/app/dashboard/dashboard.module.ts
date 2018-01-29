import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Route } from '@angular/router';

import { CoreModule } from '../core/core.module';
import { DashboardComponent } from './dashboard.component';
import { CustomerListComponent } from './customer-list/customer-list.component';
import { ConfirmDeleteDialogComponent } from '../confirm-delete-dialog/confirm-delete-dialog.component';
import { SearchCustomerComponent } from './search-customer/search-customer.component';
import { CustomerCardComponent } from '../customer-card/customer-card.component';
import { CustomerDialogComponent } from '../customer-dialog/customer-dialog.component';
import { CustomerListService } from './services/customer-list.service';

const routes: Route[] = [
  {path: '', component: DashboardComponent}
];

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
    CommonModule,
    CoreModule.forRoot(),
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes)
  ],
  providers: [CustomerListService],
  entryComponents: [
    CustomerDialogComponent,
    ConfirmDeleteDialogComponent,
    CustomerCardComponent
  ],
  exports: [RouterModule]
})
export class DashboardModule { }
