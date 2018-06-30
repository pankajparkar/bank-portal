import { NgModule, CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { CalculatorComponent } from './calculator.component';
import { CoreModule } from '../core/core.module';
import { RouterModule, Route } from '@angular/router';

const routes: Route[] = [
  {path: '', component: CalculatorComponent}
]

@NgModule({
  imports: [
    CoreModule.forRoot(),
    RouterModule.forChild(routes)
  ],
  schemas: [NO_ERRORS_SCHEMA],
  declarations: [CalculatorComponent]
})
export class CalculatorModule { }
