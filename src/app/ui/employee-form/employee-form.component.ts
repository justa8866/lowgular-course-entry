import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { EmployeeService } from '../../services/employee.service';
import {EmployeeModel} from "../../model/employee.model";


@Component({
  selector: 'app-employee-form',
  templateUrl: './employee-form.component.html',
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class EmployeeFormComponent {
  readonly employeeForm: FormGroup = new FormGroup({
    name: new FormControl(null, [Validators.required]),
    age: new FormControl(null, [Validators.min(0), Validators.required]),
    salary: new FormControl(null, [Validators.min(0), Validators.required]),
  })

  constructor(private _employeeService: EmployeeService) {
  }

  onButtonClicked(form: { employee_name: string, employee_age: string, employee_salary: string }) {
    alert('User was successfully added to the database. ' + 'Name: ' + form.employee_name +
      ', Age: ' + form.employee_age + ', Salary: ' + form.employee_salary)
  }

  onFormSubmitted(form: EmployeeModel) {
    this._employeeService.create(form).subscribe();
  }

  // onFormSubmitted(form: EmployeeModel) {
  //   this._employeeService.create(name: form.name, age: form.age,  salary: form.salary}).subscribe();
  //
  // }

}
