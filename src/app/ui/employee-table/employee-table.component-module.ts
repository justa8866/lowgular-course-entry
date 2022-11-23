import { NgModule } from '@angular/core';
import { EmployeeTableComponent } from './employee-table.component';
import {CommonModule} from "@angular/common";

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [EmployeeTableComponent],
  providers: [],
  exports: [EmployeeTableComponent]
})
export class EmployeeTableComponentModule {
}
