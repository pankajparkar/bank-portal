import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomerDialogComponent } from './customer-dialog/customer-dialog.component';
import { ConfirmDeleteDialogComponent } from './confirm-delete-dialog/confirm-delete-dialog.component';
import { CustomerCardComponent } from './customer-card/customer-card.component';
import { CoreModule } from '../core/core.module';

@NgModule({
  imports: [
    CommonModule,
    CoreModule.forRoot()
  ],
  declarations: [
    CustomerDialogComponent,
    ConfirmDeleteDialogComponent,
    CustomerCardComponent
  ],
  exports: [
    CustomerDialogComponent,
    ConfirmDeleteDialogComponent,
    CustomerCardComponent
  ],
  entryComponents: [
    CustomerDialogComponent,
    ConfirmDeleteDialogComponent,
    CustomerCardComponent
  ],
})
export class LazyResourcesModule { }
