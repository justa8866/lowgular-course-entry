import { NgModule } from '@angular/core';
import { EmployeeTableComponent } from './employee-table.component';
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";

@NgModule({
    imports: [
        CommonModule,
        RouterModule
    ],
  declarations: [EmployeeTableComponent],
  providers: [],
  exports: [EmployeeTableComponent]
})
export class EmployeeTableComponentModule {
}
