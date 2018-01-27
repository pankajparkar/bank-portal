import { Component, OnInit, Input } from '@angular/core';
import { MatDialogRef } from '@angular/material';

@Component({
  selector: 'bp-confirm-delete-dialog',
  templateUrl: './confirm-delete-dialog.component.html',
  styleUrls: ['./confirm-delete-dialog.component.css']
})
export class ConfirmDeleteDialogComponent implements OnInit {
  @Input() customer: any;
  
  constructor(public dialogRef: MatDialogRef<ConfirmDeleteDialogComponent>) { }

  ngOnInit() {
  }

}
