import { BrowserModule } from '@angular/platform-browser';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import {NoopAnimationsModule} from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { CustomMaterialModule } from './custom-material/custom-material.module';
import { NavbarComponent } from './navbar/navbar.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CustomerListComponent } from './customer-list/customer-list.component';
import { CustomerListService } from './services/customer-list.service';
import { CustomerDialogComponent } from './customer-list/customer-dialog/customer-dialog.component';
import { UtilityService } from './services/utility.service';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    DashboardComponent,
    CustomerListComponent,
    CustomerDialogComponent,
    CustomerDialogComponent
  ],
  imports: [
    BrowserModule,
    CustomMaterialModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    NoopAnimationsModule // initally disabled
  ],
  schemas: [NO_ERRORS_SCHEMA],
  providers: [
    CustomerListService,
    UtilityService
  ],
  entryComponents: [CustomerDialogComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
