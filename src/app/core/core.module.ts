import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomMaterialModule } from '../custom-material/custom-material.module';
import { NavbarComponent } from '../navbar/navbar.component';

@NgModule({
  imports: [
    CustomMaterialModule,
    CommonModule
  ],
  declarations: [
    NavbarComponent
  ],
  exports: [
    NavbarComponent,
    CustomMaterialModule
  ]
})
export class CoreModule { }
