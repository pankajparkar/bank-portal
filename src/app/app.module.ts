import { BrowserModule } from '@angular/platform-browser';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import {NoopAnimationsModule} from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { CustomerListService } from './services/customer-list.service';
import { AppRoutingModule } from './app-routing.module';
import { UtilityService } from './core/services/utility.service';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    AppRoutingModule,
    NoopAnimationsModule // initally disabled
  ],
  schemas: [NO_ERRORS_SCHEMA],
  providers: [
    CustomerListService,
    UtilityService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
