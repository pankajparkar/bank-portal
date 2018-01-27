import { Component, OnInit, Inject, Input } from '@angular/core';
import { MatDialogRef } from '@angular/material';

@Component({
  selector: 'bp-customer-dialog',
  templateUrl: './customer-dialog.component.html',
  styleUrls: ['./customer-dialog.component.css']
})
export class CustomerDialogComponent implements OnInit {
  @Input() customer: any;
  customerCopy: any;

  constructor(
    public dialogRef: MatDialogRef<CustomerDialogComponent>
  ) { }

  onNoClick(): void {
    this.dialogRef.close(this.customer);
  }

  ngOnInit(){
    this.customerCopy = Object.assign({}, this.customer);
  }
}