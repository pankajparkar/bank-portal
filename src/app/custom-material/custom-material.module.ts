import { NgModule } from '@angular/core'

import {
  MatAutocompleteModule,
  MatButtonModule,
  MatButtonToggleModule,
  MatCardModule,
  MatCheckboxModule,
  MatChipsModule,
  MatDatepickerModule,
  MatDialogModule,
  MatGridListModule,
  MatIconModule,
  MatInputModule,
  MatListModule,
  MatMenuModule,
  MatRadioModule,
  MatRippleModule,
  MatSelectModule,
  MatSnackBarModule,
  MatToolbarModule,
  MatFormFieldModule
} from '@angular/material';

const allModules = [  
  MatAutocompleteModule,
  MatButtonModule,
  MatButtonToggleModule,
  MatCardModule,
  MatCheckboxModule,
  MatChipsModule,
  MatDatepickerModule,
  MatDialogModule,
  MatGridListModule,
  MatIconModule,
  MatInputModule,
  MatListModule,
  MatMenuModule,
  MatRadioModule,
  MatRippleModule,
  MatSelectModule,
  MatSnackBarModule,
  MatToolbarModule,
  MatFormFieldModule
];

@NgModule({
  imports: [...allModules],
  exports: [...allModules],
})
export class CustomMaterialModule { }