import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomMaterialModule } from '../custom-material/custom-material.module';
import { HighlightPipe } from './pipes/highlight.pipe';
import { NavbarComponent } from './navbar/navbar.component';
import { UtilityService } from './services/utility.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [
    CustomMaterialModule,
    CommonModule,
    FormsModule, 
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [
    UtilityService
  ],
  declarations: [
    NavbarComponent,
    HighlightPipe
  ],
  exports: [
    NavbarComponent,
    HighlightPipe,
    CustomMaterialModule,
    CommonModule,
    FormsModule, 
    ReactiveFormsModule,
    HttpClientModule
  ]
})
export class CoreModule { 
  static forRoot() {
    return {ngModule: CoreModule, providers: [UtilityService]};
  }
}
