import { BrowserModule } from '@angular/platform-browser';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import {NoopAnimationsModule} from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { UtilityService } from './core/services/utility.service';
import { DashboardModule } from './dashboard/dashboard.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    DashboardModule,
    NoopAnimationsModule // initally disabled
  ],
  schemas: [NO_ERRORS_SCHEMA],
  providers: [
    UtilityService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
