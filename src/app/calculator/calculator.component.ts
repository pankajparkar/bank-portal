import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'bp-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent implements OnInit {

  operation: string = '';
  result: string = '';

  ngOnInit() {

  }

  append(element: string) {
    this.operation += element;
  }

  evaluate() {
    try {
      // TODO: eval is evil, find better way to do it
      this.result = eval(this.operation);
    }
    catch (e) {
      alert('cannot evaluate expression');
    }
  }

  undo() {
    if (this.operation != '') {
      this.operation = this.operation.slice(0, -1)
    }
  }

  clear() {
    this.operation = '';
  }

}
