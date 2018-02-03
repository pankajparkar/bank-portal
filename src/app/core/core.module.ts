import { NgModule } from '@angular/core';
import { CommonModule, DecimalPipe } from '@angular/common';
import { RouterModule } from '@angular/router';

import { CustomMaterialModule } from '../custom-material/custom-material.module';
import { HighlightPipe } from './pipes/highlight.pipe';
import { NavbarComponent } from './navbar/navbar.component';
import { UtilityService } from './services/utility.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CalculateAmoutPipe } from './pipes/calculate-amout.pipe';

@NgModule({
  imports: [
    CustomMaterialModule,
    CommonModule,
    FormsModule, 
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule
  ],
  providers: [
    UtilityService,
    DecimalPipe
  ],
  declarations: [
    NavbarComponent,
    HighlightPipe,
    CalculateAmoutPipe
  ],
  exports: [
    NavbarComponent,
    HighlightPipe,
    CalculateAmoutPipe,
    CustomMaterialModule,
    CommonModule,
    FormsModule, 
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule
  ]
})
export class CoreModule { 
  static forRoot() {
    return {ngModule: CoreModule, providers: [UtilityService]};
  }
}
