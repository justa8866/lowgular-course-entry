import { NgModule } from '@angular/core';
import { EmployeeFormComponent } from './employee-form.component';
import {ReactiveFormsModule} from "@angular/forms";

@NgModule({
  imports: [
    ReactiveFormsModule
  ],
  declarations: [EmployeeFormComponent],
  providers: [],
  exports: [EmployeeFormComponent]
})
export class EmployeeFormComponentModule {

}
