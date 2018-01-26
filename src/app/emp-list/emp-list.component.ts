import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'bp-emp-list',
  templateUrl: './emp-list.component.html',
  styleUrls: ['./emp-list.component.css']
})
export class EmpListComponent implements OnInit {
  @Input() employees: any[];
  constructor() { }

  ngOnInit() {
  }

}
