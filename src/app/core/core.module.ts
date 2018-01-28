import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomMaterialModule } from '../custom-material/custom-material.module';
import { HighlightPipe } from './pipes/highlight.pipe';
import { NavbarComponent } from './navbar/navbar.component';

@NgModule({
  imports: [
    CustomMaterialModule,
    CommonModule
  ],
  declarations: [
    NavbarComponent,
    HighlightPipe
  ],
  exports: [
    NavbarComponent,
    HighlightPipe,
    CustomMaterialModule
  ]
})
export class CoreModule { }
