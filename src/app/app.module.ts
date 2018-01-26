import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {NoopAnimationsModule} from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { CustomMaterialModule } from './custom-material/custom-material.module';
import { NavbarComponent } from './navbar/navbar.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { EmpListComponent } from './emp-list/emp-list.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    DashboardComponent,
    EmpListComponent
  ],
  imports: [
    BrowserModule,
    CustomMaterialModule,
    NoopAnimationsModule // initally disabled
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
